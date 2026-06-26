import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/shared/lib/cn'

export type IconLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'aria-label'> & {
  label: string
  external?: boolean
  children: ReactNode
}

export function IconLink({
  label,
  external = true,
  className,
  children,
  ...props
}: IconLinkProps) {
  const externalProps = external
    ? { target: '_blank', rel: 'noreferrer noopener' }
    : {}

  return (
    <a
      aria-label={label}
      title={label}
      className={cn(
        'inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-text-muted transition-colors duration-200 hover:border-primary hover:text-primary',
        className,
      )}
      {...externalProps}
      {...props}
    >
      {children}
    </a>
  )
}
