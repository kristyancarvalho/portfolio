import { ArrowDown } from 'lucide-react'
import { m } from 'motion/react'
import { Trans, useTranslation } from 'react-i18next'
import { HeroArtifact } from '@/widgets/hero/HeroArtifact'
import { HeroName } from '@/widgets/hero/HeroName'
import { Blob, DotField, OrbitRing } from '@/widgets/decoration/Shapes'
import { ResumeButton } from '@/features/resume-download/ResumeButton'
import { Container } from '@/shared/ui/Container'
import { SocialLinks } from '@/shared/ui/SocialLinks'
import { ButtonLink } from '@/shared/ui/ButtonLink'
import { baseTransition, durations, easeSoft, staggerItem } from '@/shared/lib/motion'

const lowerGroup = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.7 },
  },
}

export function HeroSection() {
  const { t } = useTranslation()

  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center overflow-hidden pb-20 pt-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Blob className="right-[6%] top-[6%] h-72 w-72" tone="accent" />
        <OrbitRing
          className="right-[-3rem] top-[26%] hidden h-72 w-72 lg:block"
          duration={70}
        />
        <DotField className="bottom-[10%] left-[-1.5rem] h-44 w-44" />
      </div>
      <Container className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="flex flex-col items-start gap-6">
          <m.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: durations.base, ease: easeSoft, delay: 0.05 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-text-muted"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-success" />
            {t('hero.availability')}
          </m.span>

          <div className="flex flex-col gap-3">
            <HeroName name="Kristyan Carvalho" />
            <m.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: durations.base, ease: easeSoft, delay: 0.55 }}
              className="flex items-center gap-3"
            >
              <m.span
                aria-hidden="true"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, ease: easeSoft, delay: 0.7 }}
                className="h-px w-10 origin-left rounded-full bg-gradient-to-r from-primary to-accent sm:w-12"
              />
              <span className="text-lg font-medium text-primary sm:text-xl">
                {t('hero.title')}
              </span>
            </m.div>
          </div>

          <m.div
            variants={lowerGroup}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start gap-6"
          >
            <m.p
              variants={staggerItem}
              className="max-w-xl text-pretty text-base leading-relaxed text-text-muted sm:text-lg"
            >
              <Trans
                i18nKey="hero.intro"
                components={{ hi: <span className="font-medium text-text" /> }}
              />
            </m.p>

            <m.div variants={staggerItem} className="flex flex-wrap items-center gap-3">
              <ResumeButton size="lg" />
              <ButtonLink href="#projects" variant="outline" size="lg">
                {t('hero.viewProjects')}
                <ArrowDown className="h-[1.1rem] w-[1.1rem]" aria-hidden="true" />
              </ButtonLink>
            </m.div>

            <m.div variants={staggerItem}>
              <SocialLinks className="pt-1" />
            </m.div>
          </m.div>
        </div>

        <m.div
          className="relative flex justify-center lg:justify-end"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...baseTransition, delay: 0.25 }}
        >
          <HeroArtifact className="max-w-md" />
        </m.div>
      </Container>
    </section>
  )
}
