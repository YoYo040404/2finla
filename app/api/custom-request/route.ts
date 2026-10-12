import { Resend } from 'resend'
import { handleCustomRequest } from '@/lib/custom-request-handler'

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY
  return handleCustomRequest(req, {
    config: {
      apiKey,
      to: process.env.LEAD_EMAIL_TO,
      from: process.env.LEAD_EMAIL_FROM ?? 'onboarding@resend.dev',
    },
    send: async (email, options) => {
      const resend = new Resend(apiKey)
      const { attachments, ...fields } = email
      return resend.emails.send({
        ...fields,
        ...(attachments ? {
          attachments: attachments.map(file => ({ ...file, content: Buffer.from(file.content) })),
        } : {}),
      }, options)
    },
  })
}
