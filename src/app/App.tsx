import { useTranslation } from 'react-i18next'
import { Header } from '@/widgets/header/Header'
import { HeroSection } from '@/widgets/hero/HeroSection'
import { BackgroundDecoration } from '@/widgets/decoration/BackgroundDecoration'
import { Section } from '@/shared/ui/Section'

export function App() {
  const { t } = useTranslation()

  return (
    <div className="relative min-h-screen">
      <BackgroundDecoration />
      <Header />
      <main>
        <HeroSection />
        <Section id="about" className="bg-background-soft">
          <h2 className="type-heading">{t('nav.about')}</h2>
        </Section>
        <Section id="projects">
          <h2 className="type-heading">{t('nav.projects')}</h2>
        </Section>
        <Section id="posts" className="bg-background-soft">
          <h2 className="type-heading">{t('nav.posts')}</h2>
        </Section>
        <Section id="contact">
          <h2 className="type-heading">{t('nav.contact')}</h2>
        </Section>
      </main>
    </div>
  )
}
