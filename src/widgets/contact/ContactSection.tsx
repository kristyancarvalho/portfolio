import { useTranslation } from 'react-i18next'
import { ContactForm } from '@/features/contact-form/ContactForm'
import { Card } from '@/shared/ui/Card'
import { Reveal } from '@/shared/ui/Reveal'
import { Section } from '@/shared/ui/Section'
import { SocialLinks } from '@/shared/ui/SocialLinks'

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
            <ContactForm />
          </Card>
        </Reveal>
      </div>
    </Section>
  )
}
