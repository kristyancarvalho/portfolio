import { ArrowUpRight, Github, Star } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Badge } from '@/shared/ui/Badge'
import { Card } from '@/shared/ui/Card'
import type { Project } from '@/entities/project/model'

export function ProjectCard({ project }: { project: Project }) {
  const { t, i18n } = useTranslation()
  const language = i18n.language === 'en' ? 'en' : 'pt-BR'
  const title = project.title[language]
  const description = project.description[language]

  return (
    <article className="project-card group h-full">
      <Card
        interactive
        className={`relative h-full overflow-hidden focus-within:border-primary focus-within:bg-surface-soft ${project.featured ? 'border-border-strong shadow-md' : ''}`}
      >
        <span
          className={`project-card-glare ${project.featured ? 'project-card-glare-featured' : ''}`}
          aria-hidden="true"
        />

        <div className="relative z-10 flex h-full flex-col gap-4">
          <div className="flex items-start justify-between gap-3">
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-semibold text-text transition-colors duration-200 group-hover:text-primary group-focus-within:text-primary">
                {title}
              </h3>
              <p className="font-mono text-xs text-text-soft">
                {project.platform} · {project.category}
              </p>
            </div>
            {project.featured ? (
              <Badge tone="accent" className="gap-1">
                <Star className="h-3 w-3" aria-hidden="true" />
                {t('projects.featured')}
              </Badge>
            ) : null}
          </div>

          <p className="flex-1 text-sm leading-relaxed text-text-muted">{description}</p>

          <ul className="flex flex-wrap gap-1.5">
            {project.stack.map((item) => (
              <li key={item}>
                <Badge>{item}</Badge>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 border-t border-border pt-4">
            {project.links.github ? (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer noopener"
                className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-text-muted transition-colors hover:text-primary focus-visible:text-primary"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
                {t('projects.code')}
                <ArrowUpRight
                  className="h-3.5 w-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 group-focus-visible/link:translate-x-0.5 group-focus-visible/link:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
            ) : null}
            {project.links.demo ? (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noreferrer noopener"
                className="group/link inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary-strong focus-visible:text-primary-strong"
              >
                {t('projects.demo')}
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 group-focus-visible/link:translate-x-0.5 group-focus-visible/link:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
            ) : null}
          </div>
        </div>
      </Card>
    </article>
  )
}
