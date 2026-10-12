export type RequestOutcome = 'accepted' | 'not_attempted' | 'unconfirmed'

/** Status codes alone cannot distinguish a proxy failure from provider acceptance. */
export function classifyRequestResponse(httpOk: boolean, body: unknown, requestId: string, hasUncertainAttempt = false): RequestOutcome {
  if (!body || typeof body !== 'object' || Array.isArray(body)) return 'unconfirmed'
  const value = body as Record<string, unknown>
  if (value.source !== '2t-custom-request-v1' || value.requestId !== requestId) return 'unconfirmed'
  if (httpOk && value.ok === true && value.deliveryState === 'accepted') return 'accepted'
  // A later rejected retry says nothing about an earlier uncertain send.
  if (value.ok === false && value.deliveryState === 'not_attempted' && !hasUncertainAttempt) return 'not_attempted'
  return 'unconfirmed'
}
