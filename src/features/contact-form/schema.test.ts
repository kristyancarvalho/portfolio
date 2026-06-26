import { describe, expect, it } from 'vitest'
import { collectFieldErrors, contactSchema } from './schema'

describe('contactSchema', () => {
  it('reports required messages for empty fields', () => {
    const result = contactSchema.safeParse({
      name: '',
      email: '',
      subject: '',
      message: '',
    })

    expect(result.success).toBe(false)
    if (!result.success) {
      const errors = collectFieldErrors(result.error.issues)
      expect(errors.name).toBe('contact.validation.nameRequired')
      expect(errors.email).toBe('contact.validation.emailRequired')
      expect(errors.subject).toBe('contact.validation.subjectRequired')
      expect(errors.message).toBe('contact.validation.messageRequired')
    }
  })

  it('reports an invalid email message', () => {
    const result = contactSchema.safeParse({
      name: 'Ada',
      email: 'not-an-email',
      subject: 'Hello',
      message: 'Hi there',
    })

    expect(result.success).toBe(false)
    if (!result.success) {
      const errors = collectFieldErrors(result.error.issues)
      expect(errors.email).toBe('contact.validation.emailInvalid')
    }
  })

  it('accepts valid input', () => {
    const result = contactSchema.safeParse({
      name: 'Ada',
      email: 'ada@example.com',
      subject: 'Hello',
      message: 'Hi there',
    })

    expect(result.success).toBe(true)
  })
})
