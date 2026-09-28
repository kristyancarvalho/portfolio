import type { PointerEvent } from 'react'
import { ArrowUpRight, Github } from 'lucide-react'
import { useReducedMotion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { cn } from '@/shared/lib/cn'
import type { Project } from '@/entities/project/model'

export function ProjectCard({ project }: { project: Project }) {
  const { t, i18n } = useTranslation()
  const reduceMotion = useReducedMotion()
  const language = i18n.language === 'en' ? 'en' : 'pt-BR'
  const title = project.title[language]
  const description = project.description[language]
  const technicalAspects = project.technicalAspects?.[language]

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    if (reduceMotion || event.pointerType === 'touch') {
      return
    }

    const bounds = event.currentTarget.getBoundingClientRect()
    event.currentTarget.style.setProperty('--spotlight-x', `${event.clientX - bounds.left}px`)
    event.currentTarget.style.setProperty('--spotlight-y', `${event.clientY - bounds.top}px`)
  }

  return (
    <article
      onPointerMove={handlePointerMove}
      className={cn(
        'group relative flex h-full overflow-hidden rounded-2xl border bg-surface p-6 shadow-sm transition-[border-color,background-color,box-shadow] duration-300 hover:border-primary/60 hover:bg-surface-soft focus-within:border-primary focus-within:bg-surface-soft',
        project.featured &&
          'border-border-strong bg-gradient-to-br from-surface via-surface to-primary-soft/25 shadow-md hover:border-primary/80 focus-within:border-primary',
      )}
    >
      <div
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100',
          project.featured ? 'opacity-0' : 'group-hover:opacity-70',
        )}
        style={{
          background: `radial-gradient(circle at var(--spotlight-x, 50%) var(--spotlight-y, 50%), rgb(var(--color-primary) / ${project.featured ? '0.14' : '0.09'}), transparent 58%)`,
        }}
      />

      <div className="relative z-10 flex w-full flex-col gap-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-col gap-1">
            <h3
              className={cn(
                'font-semibold text-text transition-colors duration-200 group-hover:text-primary group-focus-within:text-primary',
                project.featured ? 'text-xl' : 'text-lg',
              )}
            >
              {title}
            </h3>
            <p className="font-mono text-xs text-text-soft">
              {project.platform} · {project.category}
            </p>
          </div>
        </div>

        <p className="flex-1 text-sm leading-relaxed text-text-muted">{description}</p>

        {project.featured && technicalAspects ? (
          <ul className="grid grid-cols-2 gap-x-3 gap-y-2 border-y border-border/80 py-3">
            {technicalAspects.map((aspect) => (
              <li key={aspect} className="flex items-start gap-2 text-xs leading-relaxed text-text-muted">
                <span className="mt-[0.4rem] h-1 w-1 shrink-0 rounded-full bg-accent" />
                <span>{aspect}</span>
              </li>
            ))}
          </ul>
        ) : null}

        <p className="font-mono text-[0.7rem] font-medium uppercase leading-relaxed tracking-[0.08em] text-text-soft">
          {project.stack.join(' · ')}
        </p>

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
    </article>
  )
}
