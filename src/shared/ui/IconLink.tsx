import { m, type HTMLMotionProps } from 'motion/react'
import type { ReactNode } from 'react'
import { cn } from '@/shared/lib/cn'
import { interactiveHover, interactiveTap, springTransition } from '@/shared/lib/motion'

export type IconLinkProps = Omit<HTMLMotionProps<'a'>, 'aria-label'> & {
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
    <m.a
      aria-label={label}
      title={label}
      whileHover={interactiveHover}
      whileTap={interactiveTap}
      transition={springTransition}
      className={cn(
        'inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-text-muted transition-colors duration-200 hover:border-primary hover:text-primary',
        className,
      )}
      {...externalProps}
      {...props}
    >
      {children}
    </m.a>
  )
}
