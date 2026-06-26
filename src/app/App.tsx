import { Header } from '@/widgets/header/Header'
import { HeroSection } from '@/widgets/hero/HeroSection'
import { AboutSection } from '@/widgets/about/AboutSection'
import { ProjectsSection } from '@/widgets/projects/ProjectsSection'
import { PostsSection } from '@/widgets/posts/PostsSection'
import { ContactSection } from '@/widgets/contact/ContactSection'
import { Footer } from '@/widgets/footer/Footer'
import { BackgroundDecoration } from '@/widgets/decoration/BackgroundDecoration'

export function App() {
  return (
    <div className="relative min-h-screen">
      <BackgroundDecoration />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <PostsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
