import { ArrowUpRight, Github, Star } from 'lucide-react'
import { m } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { Badge } from '@/shared/ui/Badge'
import { Card } from '@/shared/ui/Card'
import { liftHover, springTransition } from '@/shared/lib/motion'
import type { Project } from '@/entities/project/model'

export function ProjectCard({ project }: { project: Project }) {
  const { t, i18n } = useTranslation()
  const language = i18n.language === 'en' ? 'en' : 'pt-BR'
  const title = project.title[language]
  const description = project.description[language]

  return (
    <m.div whileHover={liftHover} transition={springTransition} className="h-full">
      <Card interactive className="flex h-full flex-col gap-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-semibold text-text">{title}</h3>
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
              className="inline-flex items-center gap-1.5 text-sm font-medium text-text-muted transition-colors hover:text-primary"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              {t('projects.code')}
            </a>
          ) : null}
          {project.links.demo ? (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary-strong"
            >
              {t('projects.demo')}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          ) : null}
        </div>
      </Card>
    </m.div>
  )
}
