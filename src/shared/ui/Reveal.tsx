import { m } from 'motion/react'
import type { ReactNode } from 'react'
import { revealVariants, viewportOnce } from '@/shared/lib/motion'

export type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'li'
}

export function Reveal({ children, className, delay = 0, as = 'div' }: RevealProps) {
  const Component = as === 'li' ? m.li : m.div

  return (
    <Component
      className={className}
      variants={revealVariants}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {children}
    </Component>
  )
}
