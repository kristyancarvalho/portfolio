import { LazyMotion, MotionConfig, domMax } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { Header } from '@/widgets/header/Header'
import { HeroSection } from '@/widgets/hero/HeroSection'
import { AboutSection } from '@/widgets/about/AboutSection'
import { ProjectsSection } from '@/widgets/projects/ProjectsSection'
import { PostsSection } from '@/widgets/posts/PostsSection'
import { ContactSection } from '@/widgets/contact/ContactSection'
import { Footer } from '@/widgets/footer/Footer'
import { BackgroundDecoration } from '@/widgets/decoration/BackgroundDecoration'
import { useDocumentMeta } from '@/shared/lib/useDocumentMeta'
import { baseTransition } from '@/shared/lib/motion'

export function App() {
  const { t } = useTranslation()
  useDocumentMeta()

  return (
    <MotionConfig reducedMotion="user" transition={baseTransition}>
      <LazyMotion features={domMax} strict>
        <div className="relative min-h-screen">
          <a
            href="#content"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
          >
            {t('a11y.skip')}
          </a>
          <BackgroundDecoration />
          <Header />
          <main id="content">
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <PostsSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      </LazyMotion>
    </MotionConfig>
  )
}
