import { Github } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { ProjectCard } from '@/entities/project/ProjectCard'
import { projects } from '@/entities/project/projects'
import { Reveal } from '@/shared/ui/Reveal'
import { Section } from '@/shared/ui/Section'
import { SectionHeading } from '@/shared/ui/SectionHeading'
import { Stagger, StaggerItem } from '@/shared/ui/Stagger'
import { buttonVariants } from '@/shared/ui/buttonVariants'
import { siteConfig } from '@/shared/config/site'

const orderedProjects = [...projects].sort(
  (a, b) => Number(b.featured) - Number(a.featured),
)

export function ProjectsSection() {
  const { t } = useTranslation()

  return (
    <Section id="projects">
      <SectionHeading
        eyebrow={t('projects.eyebrow')}
        title={t('projects.title')}
        subtitle={t('projects.subtitle')}
      />

      <Stagger as="ul" className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {orderedProjects.map((project) => (
          <StaggerItem key={project.id} as="li" className="h-full">
            <ProjectCard project={project} />
          </StaggerItem>
        ))}
      </Stagger>

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
