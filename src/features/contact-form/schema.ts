import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().trim().min(1, 'contact.validation.nameRequired'),
  email: z
    .string()
    .trim()
    .min(1, 'contact.validation.emailRequired')
    .email('contact.validation.emailInvalid'),
  subject: z.string().trim().min(1, 'contact.validation.subjectRequired'),
  message: z.string().trim().min(1, 'contact.validation.messageRequired'),
})

export type ContactInput = z.infer<typeof contactSchema>

export type ContactField = keyof ContactInput

export function collectFieldErrors(
  issues: z.ZodIssue[],
): Partial<Record<ContactField, string>> {
  const errors: Partial<Record<ContactField, string>> = {}

  for (const issue of issues) {
    const field = issue.path[0]
    if (typeof field === 'string' && !(field in errors)) {
      errors[field as ContactField] = issue.message
    }
  }

  return errors
}
