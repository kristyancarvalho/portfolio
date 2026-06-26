import type { HTMLAttributes } from 'react'
import { cn } from '@/shared/lib/cn'

export type BadgeTone = 'default' | 'primary' | 'accent'

const toneClasses: Record<BadgeTone, string> = {
  default: 'border-border bg-surface-soft text-text-muted',
  primary: 'border-primary/30 bg-primary-soft text-primary-strong',
  accent: 'border-accent/30 bg-accent-soft text-accent',
}

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: BadgeTone
}

export function Badge({ className, tone = 'default', ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium',
        toneClasses[tone],
        className,
      )}
      {...props}
    />
  )
}
