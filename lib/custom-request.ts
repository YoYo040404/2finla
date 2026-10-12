// Shared browser/server limits. Signature checks identify formats, not malware.
export const MAX_FILES = 3
export const MAX_FILE_BYTES = 3_000_000
export const MAX_TOTAL_FILE_BYTES = 3_000_000
export const MAX_BODY_BYTES = 3_200_000
export const MAX_TEXT_BYTES = 16_000
export const ACCEPTED_FILE_TYPES = ['image/jpeg', 'image/png', 'image/webp'] as const
export const FILE_ACCEPT = ACCEPTED_FILE_TYPES.join(',')
export const PIECE_TYPES = ['custom-pendant', 'grillz', 'custom-chain', 'watch', 'bracelet-ring', 'not-sure'] as const
export const BUDGET_TYPES = ['not-sure-budget', 'under-500', '500-1500', '1500-5000', '5000-plus'] as const
export const METAL_TYPES = ['gold', 'silver', 'not-sure-metal'] as const
export const STONE_TYPES = ['diamond', 'moissanite', 'no-stones', 'not-sure-stone'] as const
export const TEXT_LIMITS = { pieceType: 32, idea: 4000, name: 120, phone: 40, budget: 32, metalDirection: 32, stoneDirection: 32, requestId: 36, submittedAt: 24 } as const
export type CustomRequestData = { -readonly [K in keyof typeof TEXT_LIMITS]: string }
export class CustomRequestError extends Error {
  status: number
  code: string
  field?: string
  constructor(status: number, code: string, message: string, field?: string) {
    super(message)
    this.name = 'CustomRequestError'
    this.status = status
    this.code = code
    this.field = field
  }
}
function fail(code: string, message: string, field?: string, status = 400): never {
  throw new CustomRequestError(status, code, message, field)
}
export function validateClientFiles(files: readonly Pick<File, 'size' | 'type'>[]): string | null {
  if (files.length > MAX_FILES) return 'Choose up to 3 reference images.'
  let total = 0
  for (const file of files) {
    if (!ACCEPTED_FILE_TYPES.includes(file.type as typeof ACCEPTED_FILE_TYPES[number])) return 'Use JPEG, PNG, or WebP images.'
    if (!Number.isSafeInteger(file.size) || file.size <= 0) return 'Choose a non-empty reference image.'
    if (file.size > MAX_FILE_BYTES) return 'Each reference image must be 3 MB or smaller.'
    total += file.size
  }
  return total > MAX_TOTAL_FILE_BYTES ? 'Reference images must total 3 MB or less.' : null
}
export async function readBoundedFormData(req: Request): Promise<FormData> {
  const contentType = req.headers.get('content-type') ?? ''
  if (contentType.length > 256) fail('invalid_content_type', 'Invalid multipart content type.', undefined, 415)
  const match = /^multipart\/form-data\s*;\s*boundary=(?:"([A-Za-z0-9'()+_,.\/:=? -]{1,70})"|([A-Za-z0-9'()+_,.\/:=?-]{1,70}))\s*$/i.exec(contentType)
  if (!match || (match[1] ?? match[2]).endsWith(' ')) fail('invalid_content_type', 'Use multipart form data.', undefined, 415)
  const length = req.headers.get('content-length')
  if (length !== null && (!/^\d{1,10}$/.test(length) || Number(length) > MAX_BODY_BYTES)) fail('body_too_large', 'Request body is too large.', undefined, 413)
  if (!req.body) fail('invalid_body', 'Invalid request body.')
  const reader = req.body.getReader()
  const body = new Uint8Array(MAX_BODY_BYTES)
  let total = 0
  try {
    while (true) {
      const { done, value } = await reader.read()
      if (done) break
      if (!(value instanceof Uint8Array)) fail('invalid_body', 'Invalid request body.')
      if (value.byteLength > MAX_BODY_BYTES - total) fail('body_too_large', 'Request body is too large.', undefined, 413)
      body.set(value, total)
      total += value.byteLength
    }
  } catch (error) {
    try { await reader.cancel() } catch { /* best effort */ }
    if (error instanceof CustomRequestError) throw error
    fail('invalid_body', 'Could not read request body.')
  } finally {
    reader.releaseLock()
  }
  try {
    return await new Response(new Blob([body.subarray(0, total)]), { headers: { 'content-type': contentType } }).formData()
  } catch {
    fail('invalid_body', 'Invalid multipart request body.')
  }
}
function signature(bytes: Uint8Array, type: string): boolean {
  if (type === 'image/jpeg') return bytes.length >= 4 && bytes[0] === 255 && bytes[1] === 216 && bytes[2] === 255
  if (type === 'image/png') return bytes.length >= 8 && [137,80,78,71,13,10,26,10].every((b,i) => bytes[i] === b)
  return type === 'image/webp' && bytes.length >= 16 && String.fromCharCode(...bytes.slice(0,4)) === 'RIFF' && String.fromCharCode(...bytes.slice(8,12)) === 'WEBP' && ['VP8 ', 'VP8L', 'VP8X'].includes(String.fromCharCode(...bytes.slice(12,16))) && new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength).getUint32(4, true) === bytes.length - 8
}
function filename(raw: string, type: string, index: number): string {
  const base = raw.split(/[\\/]/).pop() ?? ''
  const stem = base.replace(/\.[^.]*$/, '').normalize('NFKC').replace(/[^A-Za-z0-9_-]/g, '_').replace(/^[_-]+|[_-]+$/g, '').slice(0,80) || 'reference'
  const extension = type === 'image/jpeg' ? 'jpg' : type === 'image/png' ? 'png' : 'webp'
  return `${stem}-${index + 1}.${extension}`
}
export async function validateCustomRequest(formData: FormData): Promise<{ data: CustomRequestData; attachments: { filename: string; content: Uint8Array; contentType: string }[] }> {
  const fields = Object.keys(TEXT_LIMITS) as (keyof typeof TEXT_LIMITS)[]
  let textBytes = 0
  let entries = 0
  for (const [key, value] of formData.entries()) {
    if (key.length > 64 || !/^[A-Za-z0-9_]+$/.test(key)) fail('invalid_field_name', 'Invalid form field name.')
    if (++entries > fields.length + MAX_FILES) fail('too_many_fields', 'Too many form fields.')
    if (key !== 'uploadFile' && !fields.includes(key as keyof typeof TEXT_LIMITS)) fail('unknown_field', 'Unknown form field.', key)
    if (key !== 'uploadFile') {
      if (typeof value !== 'string') fail('invalid_field_type', 'Text fields must contain text.', key)
      textBytes += new TextEncoder().encode(value).byteLength
      if (textBytes > MAX_TEXT_BYTES) fail('text_too_large', 'Form text is too large.', key, 413)
    } else if (!(value instanceof File)) fail('invalid_file', 'Reference uploads must be files.', key)
  }
  const data = {} as CustomRequestData
  for (const key of fields) {
    const values = formData.getAll(key)
    if (values.length > 1) fail('duplicate_field', 'Duplicate form field.', key)
    const raw = values[0] ?? ''
    if (typeof raw !== 'string') fail('invalid_field_type', 'Text fields must contain text.', key)
    if (raw.length > TEXT_LIMITS[key]) fail('field_too_long', `This field is limited to ${TEXT_LIMITS[key]} characters.`, key)
    if (/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/.test(raw) || (key !== 'idea' && /[\r\n]/.test(raw))) fail('invalid_text', 'Remove control characters from this field.', key)
    data[key] = raw.trim()
  }
  for (const key of ['pieceType', 'name', 'phone', 'requestId', 'submittedAt'] as const) if (!data[key]) fail('required_field', 'This field is required.', key)
  for (const [key, allowed] of [['pieceType', PIECE_TYPES], ['budget', BUDGET_TYPES], ['metalDirection', METAL_TYPES], ['stoneDirection', STONE_TYPES]] as const) {
    if (data[key] && !(allowed as readonly string[]).includes(data[key])) fail('invalid_enum', 'Select a valid option.', key)
  }
  if (!/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(data.requestId)) fail('invalid_request_id', 'Invalid request identifier.', 'requestId')
  if (!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(data.submittedAt) || !Number.isFinite(Date.parse(data.submittedAt)) || new Date(data.submittedAt).toISOString() !== data.submittedAt) fail('invalid_timestamp', 'Invalid submission timestamp.', 'submittedAt')
  const files = formData.getAll('uploadFile') as File[]
  const fileError = validateClientFiles(files)
  if (fileError) fail('invalid_files', fileError, 'uploadFile', files.some(file => file.size > MAX_FILE_BYTES) || files.reduce((n,f) => n + f.size,0) > MAX_TOTAL_FILE_BYTES ? 413 : 400)
  if (!data.idea && !files.length) fail('idea_required', 'Add an idea or reference image.', 'idea')
  const attachments = []
  for (const [index, file] of files.entries()) {
    let bytes: Uint8Array
    try { bytes = new Uint8Array(await file.arrayBuffer()) } catch { fail('invalid_file', 'Could not read reference image.', 'uploadFile') }
    if (!signature(bytes, file.type)) fail('invalid_signature', 'Reference image does not match its file type.', 'uploadFile')
    attachments.push({ filename: filename(file.name, file.type, index), content: bytes, contentType: file.type })
  }
  return { data, attachments }
}
