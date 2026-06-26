import { m, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'

export type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'li'
}

export function Reveal({ children, className, delay = 0, as = 'div' }: RevealProps) {
  const reduceMotion = useReducedMotion()
  const Component = as === 'li' ? m.li : m.div

  return (
    <Component
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  )
}
