import { ArrowDown } from 'lucide-react'
import { m } from 'motion/react'
import { Trans, useTranslation } from 'react-i18next'
import { HeroName } from '@/widgets/hero/HeroName'
import { Blob, OrbitRing } from '@/widgets/decoration/Shapes'
import { ResumeButton } from '@/features/resume-download/ResumeButton'
import { Container } from '@/shared/ui/Container'
import { SocialLinks } from '@/shared/ui/SocialLinks'
import { ButtonLink } from '@/shared/ui/ButtonLink'
import { durations, easeSoft } from '@/shared/lib/motion'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: durations.base, ease: easeSoft, delay },
})

export function HeroSection() {
  const { t } = useTranslation()

  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center overflow-hidden pb-20 pt-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Blob className="left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2" />
        <Blob
          className="left-[16%] top-[22%] hidden h-64 w-64 sm:block"
          tone="accent"
        />
        <OrbitRing
          className="left-1/2 top-1/2 hidden h-[44rem] w-[44rem] -translate-x-1/2 -translate-y-1/2 opacity-60 lg:block"
          duration={110}
        />
      </div>

      <Container>
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-7 text-center">
          <m.span
            {...fadeUp(0.05)}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3 py-1 text-xs font-medium text-text-muted backdrop-blur-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-success" />
            {t('hero.availability')}
          </m.span>

          <div className="flex flex-col items-center gap-5">
            <HeroName name="Kristyan Carvalho" />
            <m.div
              {...fadeUp(0.45)}
              className="flex items-center gap-2.5 text-primary sm:gap-3"
            >
              <span className="h-px w-7 rounded-full bg-gradient-to-r from-transparent to-primary sm:w-10" />
              <span className="whitespace-nowrap text-xs font-semibold uppercase tracking-[0.16em] sm:text-base sm:tracking-[0.22em]">
                {t('hero.title')}
              </span>
              <span className="h-px w-7 rounded-full bg-gradient-to-l from-transparent to-primary sm:w-10" />
            </m.div>
          </div>

          <m.p
            {...fadeUp(0.58)}
            className="max-w-2xl text-pretty text-base leading-relaxed text-text-muted sm:text-lg"
          >
            <Trans
              i18nKey="hero.intro"
              components={{ hi: <span className="font-semibold text-text" /> }}
            />
          </m.p>

          <m.div
            {...fadeUp(0.72)}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            <ResumeButton size="lg" />
            <ButtonLink href="#projects" variant="outline" size="lg">
              {t('hero.viewProjects')}
              <ArrowDown className="h-[1.1rem] w-[1.1rem]" aria-hidden="true" />
            </ButtonLink>
          </m.div>

          <m.div {...fadeUp(0.84)}>
            <SocialLinks className="justify-center" />
          </m.div>
        </div>
      </Container>
    </section>
  )
}
