import type { HTMLAttributes } from 'react'
import { cn } from '@/shared/lib/cn'

export type CardProps = HTMLAttributes<HTMLDivElement> & {
  interactive?: boolean
}

export function Card({ className, interactive = false, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-border bg-surface p-6 shadow-sm',
        interactive &&
          'transition-colors duration-200 hover:border-border-strong hover:bg-surface-soft',
        className,
      )}
      {...props}
    />
  )
}
