import { ArrowDown } from 'lucide-react'
import { m } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { HeroArtifact } from '@/widgets/hero/HeroArtifact'
import { Blob, DotField, OrbitRing } from '@/widgets/decoration/Shapes'
import { ResumeButton } from '@/features/resume-download/ResumeButton'
import { Container } from '@/shared/ui/Container'
import { SocialLinks } from '@/shared/ui/SocialLinks'
import { ButtonLink } from '@/shared/ui/ButtonLink'
import { baseTransition, staggerContainer, staggerItem } from '@/shared/lib/motion'

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
        <m.div
          className="flex flex-col items-start gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <m.span
            variants={staggerItem}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-text-muted"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-success" />
            {t('hero.availability')}
          </m.span>

          <m.div variants={staggerItem} className="flex flex-col gap-3">
            <h1 className="type-display">Kristyan Carvalho</h1>
            <p className="text-xl font-medium text-primary sm:text-2xl">
              {t('hero.title')}
            </p>
          </m.div>

          <m.p variants={staggerItem} className="type-body-muted max-w-xl text-pretty">
            {t('hero.intro')}
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

        <m.div
          className="relative flex justify-center lg:justify-end"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...baseTransition, delay: 0.2 }}
        >
          <HeroArtifact className="max-w-md" />
        </m.div>
      </Container>
    </section>
  )
}
