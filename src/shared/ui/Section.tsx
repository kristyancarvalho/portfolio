import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/shared/lib/cn'
import { Container } from '@/shared/ui/Container'

export type SectionProps = HTMLAttributes<HTMLElement> & {
  id: string
  containerClassName?: string
  children: ReactNode
}

export function Section({
  id,
  className,
  containerClassName,
  children,
  ...props
}: SectionProps) {
  return (
    <section id={id} className={cn('scroll-mt-24 py-20 sm:py-28', className)} {...props}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  )
}
