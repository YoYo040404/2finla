import { CustomRequestError, readBoundedFormData, validateCustomRequest } from './custom-request'

type Attachment = { filename: string; content: Uint8Array; contentType: string }
export type LeadEmail = { from: string; to: string; subject: string; html: string; attachments?: Attachment[] }
export type LeadProviderResult = { data?: { id: string } | null; error?: { name?: string; message?: string } | null }
export type LeadDependencies = {
  config: { apiKey?: string; to?: string; from?: string }
  send: (email: LeadEmail, options: { idempotencyKey: string }) => Promise<LeadProviderResult>
  now?: () => number
}
const METAL_LABELS: Record<string, string> = { gold: 'Gold', silver: 'Silver', 'not-sure-metal': 'Not sure yet' }
const STONE_LABELS: Record<string, string> = { diamond: 'Diamond', moissanite: 'Moissanite', 'no-stones': 'No stones', 'not-sure-stone': 'Not sure yet' }
function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]!)
}
function reply(body: Record<string, unknown>, status: number): Response {
  return Response.json({ source: '2t-custom-request-v1', ...body }, { status, headers: { 'Cache-Control': 'no-store' } })
}
/** Provider idempotency is bounded; no in-memory cross-instance deduplication claim. */
export async function handleCustomRequest(req: Request, deps: LeadDependencies): Promise<Response> {
  const headerId = req.headers.get('x-2t-request-id') ?? ''
  const correlationId = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(headerId) ? headerId : undefined
  let validated: Awaited<ReturnType<typeof validateCustomRequest>>
  try {
    validated = await validateCustomRequest(await readBoundedFormData(req))
  } catch (error) {
    if (error instanceof CustomRequestError) {
      return reply({ ok: false, deliveryState: 'not_attempted', requestId: correlationId, code: error.code, error: error.message, ...(error.field ? { field: error.field } : {}) }, error.status)
    }
    return reply({ ok: false, deliveryState: 'not_attempted', requestId: correlationId, code: 'invalid_request', error: 'Could not read this request.' }, 400)
  }
  const { data, attachments } = validated
  if (correlationId && correlationId !== data.requestId) {
    return reply({ ok: false, deliveryState: 'not_attempted', requestId: correlationId, code: 'request_id_mismatch', error: 'Request reference does not match.' }, 400)
  }
  // Resend remembers a key for 24h. Stop retries before that window expires;
  // an expired/ambiguous reference requires human reconciliation, never a new send.
  const age = (deps.now ?? Date.now)() - Date.parse(data.submittedAt)
  if (age > 23 * 60 * 60 * 1000 || age < -5 * 60 * 1000) {
    return reply({ ok: false, deliveryState: 'unconfirmed', code: 'expired_reference', requestId: data.requestId,
      error: 'This reference needs confirmation. Please text 2T before sending another request.' }, 409)
  }
  const { apiKey, to, from } = deps.config
  if (!apiKey || !to || !from) {
    return reply({ ok: false, deliveryState: 'not_attempted', code: 'configuration_error', requestId: data.requestId, error: 'Requests are temporarily unavailable. Please text 2T.' }, 503)
  }
  // Immutable client timestamp makes identical retries produce identical email payloads.
  const rows = [
    ['Reference', data.requestId], ['Piece type', data.pieceType], ['Name', data.name], ['Phone', data.phone],
    ['Budget', data.budget || '—'], ['Metal direction', METAL_LABELS[data.metalDirection] || '—'],
    ['Stone direction', STONE_LABELS[data.stoneDirection] || '—'], ['Idea', data.idea || '—'],
    ['Files', attachments.map(file => file.filename).join(', ') || 'None'], ['Request created', data.submittedAt],
  ]
  const html = `<h2>New Custom Request — 2T Jewelers</h2><table>${rows.map(([label, value]) =>
    `<tr><th style="text-align:left;vertical-align:top">${escapeHtml(label)}</th><td style="white-space:pre-wrap">${escapeHtml(value)}</td></tr>`
  ).join('')}</table>`
  const email: LeadEmail = { from, to, subject: `New custom request — ${data.pieceType} — ${data.name}`, html,
    ...(attachments.length ? { attachments } : {}) }
  try {
    const result = await deps.send(email, { idempotencyKey: `custom-request/${data.requestId}` })
    if (result.error) {
      const conflict = result.error.name === 'invalid_idempotent_request'
      const busy = result.error.name === 'concurrent_idempotent_requests'
      return reply({ ok: false, deliveryState: 'unconfirmed', code: conflict ? 'request_conflict' : busy ? 'request_pending' : 'provider_error', requestId: data.requestId,
        error: conflict ? 'This reference has different details. Start a new request or text 2T.'
          : 'We could not confirm your request. Keep this reference and try again or text 2T.' }, conflict ? 409 : 502)
    }
    if (!result.data?.id) {
      return reply({ ok: false, deliveryState: 'unconfirmed', code: 'delivery_uncertain', requestId: data.requestId,
        error: 'We could not confirm your request. Keep this reference and try again or text 2T.' }, 502)
    }
    return reply({ ok: true, deliveryState: 'accepted', requestId: data.requestId }, 200)
  } catch {
    // No secret, provider exception, customer content or attachment is exposed/logged.
    return reply({ ok: false, deliveryState: 'unconfirmed', code: 'delivery_uncertain', requestId: data.requestId,
      error: 'We could not confirm your request. Keep this reference and try again or text 2T.' }, 502)
  }
}
