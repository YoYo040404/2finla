import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const MAX_FILE_BYTES = 5 * 1024 * 1024 // 5 MB

function htmlEscape(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

const METAL_LABELS: Record<string, string> = {
  gold:             'Gold',
  silver:           'Silver',
  'not-sure-metal': 'Not sure yet',
}

const STONE_LABELS: Record<string, string> = {
  diamond:          'Diamond',
  moissanite:       'Moissanite',
  'no-stones':      'No stones',
  'not-sure-stone': 'Not sure yet',
}

function resolveLabel(map: Record<string, string>, raw: string): string {
  return map[raw] ?? raw
}

export async function POST(req: NextRequest) {
  // Parse multipart/form-data
  let formData: FormData
  try {
    formData = await req.formData()
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const pieceType  = (formData.get('pieceType')  as string | null)?.trim() ?? ''
  const idea       = (formData.get('idea')        as string | null)?.trim() ?? ''
  const name       = (formData.get('name')        as string | null)?.trim() ?? ''
  const phone      = (formData.get('phone')       as string | null)?.trim() ?? ''
  const budget          = (formData.get('budget')          as string | null)?.trim() ?? ''
  const metalDirection  = (formData.get('metalDirection')  as string | null)?.trim() ?? ''
  const stoneDirection  = (formData.get('stoneDirection')  as string | null)?.trim() ?? ''
  const uploadFile      = formData.get('uploadFile') as File | null

  // Server-side validation (mirrors client rules)
  if (!pieceType)                        return NextResponse.json({ error: 'pieceType required.' }, { status: 400 })
  if (!name || !phone)                   return NextResponse.json({ error: 'name and phone required.' }, { status: 400 })
  if (!idea && !uploadFile?.size)        return NextResponse.json({ error: 'idea or file required.' }, { status: 400 })

  // Build attachment if a file was uploaded
  const attachments: { filename: string; content: Buffer }[] = []
  if (uploadFile && uploadFile.size > 0) {
    if (uploadFile.size > MAX_FILE_BYTES) {
      return NextResponse.json({ error: 'File exceeds 5 MB limit.' }, { status: 400 })
    }
    try {
      const bytes = await uploadFile.arrayBuffer()
      attachments.push({
        filename: uploadFile.name,
        content:  Buffer.from(bytes),
      })
    } catch {
      return NextResponse.json({ error: 'Could not process attachment.' }, { status: 500 })
    }
  }

  const to   = process.env.LEAD_EMAIL_TO   ?? ''
  const from = process.env.LEAD_EMAIL_FROM ?? 'onboarding@resend.dev'

  if (!process.env.RESEND_API_KEY) {
    console.error('[2T] RESEND_API_KEY is not set.')
    return NextResponse.json({ error: 'Server configuration error.' }, { status: 500 })
  }
  if (!to) {
    console.error('[2T] LEAD_EMAIL_TO is not set.')
    return NextResponse.json({ error: 'Server configuration error.' }, { status: 500 })
  }

  const submittedAt = new Date().toISOString()
  const html = `
<h2 style="font-family:monospace;margin-bottom:16px">New Custom Request — 2T Jewelers</h2>
<table style="border-collapse:collapse;font-family:monospace;font-size:14px;line-height:1.7">
  <tr><td style="padding:2px 16px 2px 0;color:#888;white-space:nowrap">Piece type</td><td>${htmlEscape(pieceType)}</td></tr>
  <tr><td style="padding:2px 16px 2px 0;color:#888;white-space:nowrap">Name</td>      <td>${htmlEscape(name)}</td></tr>
  <tr><td style="padding:2px 16px 2px 0;color:#888;white-space:nowrap">Phone</td>     <td>${htmlEscape(phone)}</td></tr>
  <tr><td style="padding:2px 16px 2px 0;color:#888;white-space:nowrap">Budget</td>           <td>${budget ? htmlEscape(budget) : '—'}</td></tr>
  <tr><td style="padding:2px 16px 2px 0;color:#888;white-space:nowrap">Metal direction</td>  <td>${metalDirection ? htmlEscape(resolveLabel(METAL_LABELS, metalDirection)) : '—'}</td></tr>
  <tr><td style="padding:2px 16px 2px 0;color:#888;white-space:nowrap">Stone direction</td>  <td>${stoneDirection ? htmlEscape(resolveLabel(STONE_LABELS, stoneDirection)) : '—'}</td></tr>
  <tr><td style="padding:2px 16px 2px 0;color:#888;white-space:nowrap">Idea</td>             <td style="white-space:pre-wrap">${idea ? htmlEscape(idea) : '—'}</td></tr>
  <tr><td style="padding:2px 16px 2px 0;color:#888;white-space:nowrap">File</td>      <td>${uploadFile?.name ? htmlEscape(uploadFile.name) : 'None'}</td></tr>
  <tr><td style="padding:2px 16px 2px 0;color:#888;white-space:nowrap">Submitted</td> <td>${submittedAt}</td></tr>
</table>
${attachments.length ? '<p style="font-family:monospace;font-size:13px;margin-top:16px;color:#555">Reference file attached.</p>' : ''}
`

  const resend = new Resend(process.env.RESEND_API_KEY)

  const { error: resendError } = await resend.emails.send({
    from,
    to,
    subject: `New custom request — ${pieceType} — ${name}`,
    html,
    ...(attachments.length ? { attachments } : {}),
  })

  if (resendError) {
    console.error('[2T] Resend send error:', resendError)
    return NextResponse.json({ error: 'Failed to send.' }, { status: 500 })
  }

  return NextResponse.json({ ok: true }, { status: 200 })
}
