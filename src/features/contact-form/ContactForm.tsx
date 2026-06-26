import { useState, type ChangeEvent, type FormEvent } from 'react'
import { Send } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import {
  ContactNotConfiguredError,
  sendContactMessage,
} from '@/features/contact-form/contactService'
import {
  collectFieldErrors,
  contactSchema,
  type ContactField,
} from '@/features/contact-form/schema'
import { Button } from '@/shared/ui/Button'
import { TextAreaField, TextField } from '@/shared/ui/Field'
import { cn } from '@/shared/lib/cn'

type ContactValues = Record<ContactField, string>

type Status = 'idle' | 'submitting' | 'success' | 'error' | 'unconfigured'

const emptyValues: ContactValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

export function ContactForm() {
  const { t } = useTranslation()
  const [values, setValues] = useState<ContactValues>(emptyValues)
  const [errors, setErrors] = useState<Partial<Record<ContactField, string>>>({})
  const [status, setStatus] = useState<Status>('idle')

  const updateField =
    (field: ContactField) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { value } = event.target
      setValues((current) => ({ ...current, [field]: value }))
      setErrors((current) => {
        if (!current[field]) {
          return current
        }
        const next = { ...current }
        delete next[field]
        return next
      })
    }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (status === 'submitting') {
      return
    }

    const result = contactSchema.safeParse(values)
    if (!result.success) {
      setErrors(collectFieldErrors(result.error.issues))
      setStatus('idle')
      return
    }

    setErrors({})
    setStatus('submitting')

    try {
      await sendContactMessage(result.data)
      setValues(emptyValues)
      setStatus('success')
    } catch (error) {
      setStatus(error instanceof ContactNotConfiguredError ? 'unconfigured' : 'error')
    }
  }

  const statusMessage =
    status === 'success'
      ? t('contact.form.success')
      : status === 'error'
        ? t('contact.form.error')
        : status === 'unconfigured'
          ? t('contact.form.notConfigured')
          : ''

  const statusTone =
    status === 'success' ? 'text-success' : 'text-danger'

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <TextField
          id="contact-name"
          name="name"
          label={t('contact.form.name')}
          autoComplete="name"
          value={values.name}
          onChange={updateField('name')}
          error={errors.name ? t(errors.name) : undefined}
        />
        <TextField
          id="contact-email"
          name="email"
          type="email"
          label={t('contact.form.email')}
          autoComplete="email"
          value={values.email}
          onChange={updateField('email')}
          error={errors.email ? t(errors.email) : undefined}
        />
      </div>
      <TextField
        id="contact-subject"
        name="subject"
        label={t('contact.form.subject')}
        value={values.subject}
        onChange={updateField('subject')}
        error={errors.subject ? t(errors.subject) : undefined}
      />
      <TextAreaField
        id="contact-message"
        name="message"
        label={t('contact.form.message')}
        value={values.message}
        onChange={updateField('message')}
        error={errors.message ? t(errors.message) : undefined}
      />
      <Button type="submit" className="self-start" disabled={status === 'submitting'}>
        <Send className="h-[1.05rem] w-[1.05rem]" aria-hidden="true" />
        {status === 'submitting' ? t('contact.form.sending') : t('contact.form.send')}
      </Button>
      <p
        role="status"
        aria-live="polite"
        className={cn('min-h-[1.25rem] text-sm', statusMessage && statusTone)}
      >
        {statusMessage}
      </p>
    </form>
  )
}
