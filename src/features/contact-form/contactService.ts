import emailjs from '@emailjs/browser'
import type { ContactInput } from '@/features/contact-form/schema'

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined

export const isContactConfigured = Boolean(serviceId && templateId && publicKey)

export class ContactNotConfiguredError extends Error {
  constructor() {
    super('Contact provider is not configured')
    this.name = 'ContactNotConfiguredError'
  }
}

export async function sendContactMessage(input: ContactInput): Promise<void> {
  if (!serviceId || !templateId || !publicKey) {
    throw new ContactNotConfiguredError()
  }

  await emailjs.send(
    serviceId,
    templateId,
    {
      from_name: input.name,
      reply_to: input.email,
      subject: input.subject,
      message: input.message,
    },
    { publicKey },
  )
}
