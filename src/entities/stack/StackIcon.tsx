import { stackIcons } from '@/entities/stack/icons'
import { cn } from '@/shared/lib/cn'

export function StackIcon({ slug, className }: { slug?: string; className?: string }) {
  const icon = slug ? stackIcons[slug] : undefined

  if (!icon) {
    return null
  }

  return (
    <svg
      viewBox="0 0 24 24"
      className={cn('h-4 w-4', className)}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d={icon.path} />
    </svg>
  )
}
