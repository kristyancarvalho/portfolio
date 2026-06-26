import { useState, type ChangeEvent, type FormEvent } from 'react'
import { Send } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/shared/ui/Button'
import { TextAreaField, TextField } from '@/shared/ui/Field'

type ContactValues = {
  name: string
  email: string
  subject: string
  message: string
}

const emptyValues: ContactValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

export function ContactForm() {
  const { t } = useTranslation()
  const [values, setValues] = useState<ContactValues>(emptyValues)

  const updateField =
    (field: keyof ContactValues) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((current) => ({ ...current, [field]: event.target.value }))
    }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

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
        />
        <TextField
          id="contact-email"
          name="email"
          type="email"
          label={t('contact.form.email')}
          autoComplete="email"
          value={values.email}
          onChange={updateField('email')}
        />
      </div>
      <TextField
        id="contact-subject"
        name="subject"
        label={t('contact.form.subject')}
        value={values.subject}
        onChange={updateField('subject')}
      />
      <TextAreaField
        id="contact-message"
        name="message"
        label={t('contact.form.message')}
        value={values.message}
        onChange={updateField('message')}
      />
      <Button type="submit" className="self-start">
        <Send className="h-[1.05rem] w-[1.05rem]" aria-hidden="true" />
        {t('contact.form.send')}
      </Button>
      <p role="status" aria-live="polite" className="min-h-[1.25rem] text-sm" />
    </form>
  )
}
