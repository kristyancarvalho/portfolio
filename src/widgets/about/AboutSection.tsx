import { Check } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Badge } from '@/shared/ui/Badge'
import { Card } from '@/shared/ui/Card'
import { Reveal } from '@/shared/ui/Reveal'
import { Section } from '@/shared/ui/Section'

const stack = [
  'TypeScript',
  'React',
  'Vite',
  'Node.js',
  'Go',
  'PostgreSQL',
  'Docker',
  'Linux',
  'GitHub Actions',
  'Tailwind CSS',
]

export function AboutSection() {
  const { t } = useTranslation()
  const interests = t('about.interests', { returnObjects: true }) as string[]

  return (
    <Section id="about" className="bg-background-soft">
      <Reveal>
        <p className="type-badge text-primary">{t('about.eyebrow')}</p>
        <h2 className="type-heading mt-2">{t('about.title')}</h2>
      </Reveal>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <Reveal className="space-y-5">
          <p className="text-lg leading-relaxed text-text">{t('about.bio')}</p>
          <p className="type-body-muted">{t('about.work')}</p>
        </Reveal>

        <div className="space-y-6">
          <Reveal>
            <Card>
              <h3 className="text-sm font-semibold text-text">
                {t('about.stackTitle')}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {stack.map((item) => (
                  <Badge key={item} tone="primary">
                    {item}
                  </Badge>
                ))}
              </div>
            </Card>
          </Reveal>

          <Reveal delay={0.1}>
            <Card>
              <h3 className="text-sm font-semibold text-text">
                {t('about.interestsTitle')}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {interests.map((interest) => (
                  <li key={interest} className="flex items-start gap-2.5 text-sm text-text-muted">
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                      aria-hidden="true"
                    />
                    <span>{interest}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
