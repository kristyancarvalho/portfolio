import { useTranslation } from 'react-i18next'
import { Header } from '@/widgets/header/Header'
import { HeroSection } from '@/widgets/hero/HeroSection'
import { AboutSection } from '@/widgets/about/AboutSection'
import { ProjectsSection } from '@/widgets/projects/ProjectsSection'
import { ContactSection } from '@/widgets/contact/ContactSection'
import { Footer } from '@/widgets/footer/Footer'
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
        <AboutSection />
        <ProjectsSection />
        <Section id="posts" className="bg-background-soft">
          <h2 className="type-heading">{t('nav.posts')}</h2>
        </Section>
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
