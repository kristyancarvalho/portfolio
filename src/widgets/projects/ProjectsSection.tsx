import { Github } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { ProjectCard } from '@/entities/project/ProjectCard'
import { projects } from '@/entities/project/projects'
import { Reveal } from '@/shared/ui/Reveal'
import { Section } from '@/shared/ui/Section'
import { buttonVariants } from '@/shared/ui/buttonVariants'
import { siteConfig } from '@/shared/config/site'

const orderedProjects = [...projects].sort(
  (a, b) => Number(b.featured) - Number(a.featured),
)

export function ProjectsSection() {
  const { t } = useTranslation()

  return (
    <Section id="projects">
      <Reveal>
        <p className="type-badge text-primary">{t('projects.eyebrow')}</p>
        <h2 className="type-heading mt-2">{t('projects.title')}</h2>
        <p className="type-body-muted mt-3 max-w-2xl">{t('projects.subtitle')}</p>
      </Reveal>

      <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {orderedProjects.map((project, index) => (
          <Reveal
            key={project.id}
            as="li"
            delay={Math.min(index * 0.06, 0.3)}
            className="h-full"
          >
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </ul>

      <Reveal className="mt-10 flex justify-center">
        <a
          href={siteConfig.social.github}
          target="_blank"
          rel="noreferrer noopener"
          className={buttonVariants({ variant: 'outline', size: 'md' })}
        >
          <Github className="h-[1.05rem] w-[1.05rem]" aria-hidden="true" />
          {t('projects.githubProfile')}
        </a>
      </Reveal>
    </Section>
  )
}
