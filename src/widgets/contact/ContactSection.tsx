import { lazy, Suspense } from 'react'
import { useTranslation } from 'react-i18next'
import { Card } from '@/shared/ui/Card'
import { Reveal } from '@/shared/ui/Reveal'
import { Section } from '@/shared/ui/Section'
import { SocialLinks } from '@/shared/ui/SocialLinks'

const ContactForm = lazy(() =>
  import('@/features/contact-form/ContactForm').then((module) => ({
    default: module.ContactForm,
  })),
)

function ContactFormFallback() {
  return (
    <div className="flex flex-col gap-4" aria-hidden="true">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="h-16 animate-pulse rounded-xl bg-surface-soft" />
        <div className="h-16 animate-pulse rounded-xl bg-surface-soft" />
      </div>
      <div className="h-16 animate-pulse rounded-xl bg-surface-soft" />
      <div className="h-32 animate-pulse rounded-xl bg-surface-soft" />
      <div className="h-11 w-40 animate-pulse rounded-full bg-surface-soft" />
    </div>
  )
}

export function ContactSection() {
  const { t } = useTranslation()

  return (
    <Section id="contact">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal className="space-y-8">
          <div>
            <p className="type-badge text-primary">{t('contact.eyebrow')}</p>
            <h2 className="type-heading mt-2">{t('contact.title')}</h2>
            <p className="type-body-muted mt-3 max-w-md">{t('contact.subtitle')}</p>
          </div>
          <div>
            <p className="type-caption mb-3">{t('contact.socialLabel')}</p>
            <SocialLinks />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <Card className="p-6 sm:p-8">
            <Suspense fallback={<ContactFormFallback />}>
              <ContactForm />
            </Suspense>
          </Card>
        </Reveal>
      </div>
    </Section>
  )
}
