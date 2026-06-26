import { useTranslation } from 'react-i18next'
import { Header } from '@/widgets/header/Header'
import { Section } from '@/shared/ui/Section'

export function App() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section
          id="home"
          className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center"
        >
          <h1 className="type-display">Kristyan Carvalho</h1>
          <p className="type-subheading">Full-Stack Developer</p>
        </section>
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
