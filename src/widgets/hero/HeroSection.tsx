import { ArrowDown } from 'lucide-react'
import { m, useReducedMotion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { HeroArtifact } from '@/widgets/hero/HeroArtifact'
import { ResumeButton } from '@/features/resume-download/ResumeButton'
import { Container } from '@/shared/ui/Container'
import { SocialLinks } from '@/shared/ui/SocialLinks'
import { buttonVariants } from '@/shared/ui/buttonVariants'
import { cn } from '@/shared/lib/cn'

export function HeroSection() {
  const { t } = useTranslation()
  const reduceMotion = useReducedMotion()

  return (
    <section id="home" className="relative flex min-h-screen items-center pb-20 pt-28">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <m.div
          className="flex flex-col items-start gap-6"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-success" />
            {t('hero.availability')}
          </span>

          <div className="flex flex-col gap-3">
            <h1 className="type-display">Kristyan Carvalho</h1>
            <p className="text-xl font-medium text-primary sm:text-2xl">
              {t('hero.title')}
            </p>
          </div>

          <p className="type-body-muted max-w-xl text-pretty">{t('hero.intro')}</p>

          <div className="flex flex-wrap items-center gap-3">
            <ResumeButton size="lg" />
            <a
              href="#projects"
              className={cn(buttonVariants({ variant: 'outline', size: 'lg' }))}
            >
              {t('hero.viewProjects')}
              <ArrowDown className="h-[1.1rem] w-[1.1rem]" aria-hidden="true" />
            </a>
          </div>

          <SocialLinks className="pt-1" />
        </m.div>

        <m.div
          className="relative flex justify-center lg:justify-end"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <HeroArtifact className="max-w-md" />
        </m.div>
      </Container>
    </section>
  )
}
