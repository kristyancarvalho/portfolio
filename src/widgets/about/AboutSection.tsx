import { lazy, Suspense } from 'react'
import { Check } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Card } from '@/shared/ui/Card'
import { Reveal } from '@/shared/ui/Reveal'
import { Section } from '@/shared/ui/Section'
import { SectionHeading } from '@/shared/ui/SectionHeading'

const StackShowcase = lazy(() =>
  import('@/widgets/about/StackShowcase').then((module) => ({
    default: module.StackShowcase,
  })),
)

function StackShowcaseFallback() {
  return (
    <div className="mt-14" aria-hidden="true">
      <div className="h-6 w-28 animate-pulse rounded-full bg-surface-soft" />
      <div className="mt-3 h-4 w-80 max-w-full animate-pulse rounded-full bg-surface-soft" />
      <div className="mt-6 flex flex-col gap-3">
        <div className="h-11 animate-pulse rounded-full bg-surface-soft" />
        <div className="h-11 animate-pulse rounded-full bg-surface-soft" />
      </div>
    </div>
  )
}

export function AboutSection() {
  const { t } = useTranslation()
  const interests = t('about.interests', { returnObjects: true }) as string[]

  return (
    <Section id="about" className="bg-background-soft">
      <SectionHeading eyebrow={t('about.eyebrow')} title={t('about.title')} />

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <Reveal className="space-y-5">
          <p className="text-lg leading-relaxed text-text">{t('about.bio')}</p>
          <p className="type-body-muted">{t('about.work')}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <Card>
            <h3 className="text-sm font-semibold text-text">
              {t('about.interestsTitle')}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {interests.map((interest) => (
                <li
                  key={interest}
                  className="flex items-start gap-2.5 text-sm text-text-muted"
                >
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

      <Reveal>
        <Suspense fallback={<StackShowcaseFallback />}>
          <StackShowcase />
        </Suspense>
      </Reveal>
    </Section>
  )
}
