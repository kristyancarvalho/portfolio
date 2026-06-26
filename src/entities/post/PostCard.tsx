import { ArrowUpRight } from 'lucide-react'
import { m } from 'motion/react'
import { useTranslation } from 'react-i18next'
import type { BlogPost } from '@/entities/post/model'
import { formatDate } from '@/shared/lib/formatDate'
import { liftHover, springTransition } from '@/shared/lib/motion'

export function PostCard({ post }: { post: BlogPost }) {
  const { t, i18n } = useTranslation()

  return (
    <m.a
      href={post.url}
      target="_blank"
      rel="noreferrer noopener"
      whileHover={liftHover}
      transition={springTransition}
      className="group flex h-full flex-col gap-3 rounded-2xl border border-border bg-surface p-6 shadow-sm transition-colors duration-200 hover:border-border-strong hover:bg-surface-soft"
    >
      <time dateTime={post.publishedAt} className="type-caption">
        {formatDate(post.publishedAt, i18n.language)}
      </time>
      <h3 className="line-clamp-2 text-lg font-semibold text-text transition-colors group-hover:text-primary">
        {post.title}
      </h3>
      <p className="line-clamp-3 flex-1 text-sm leading-relaxed text-text-muted">
        {post.description}
      </p>
      <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
        {t('posts.read')}
        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </span>
    </m.a>
  )
}
