import { m } from 'motion/react'
import type { ReactNode } from 'react'
import { staggerContainer, staggerItem, viewportOnce } from '@/shared/lib/motion'

type ContainerTag = 'div' | 'ul' | 'ol'
type ItemTag = 'div' | 'li'

export type StaggerProps = {
  as?: ContainerTag
  className?: string
  children: ReactNode
}

export function Stagger({ as = 'div', className, children }: StaggerProps) {
  const Component = as === 'ul' ? m.ul : as === 'ol' ? m.ol : m.div

  return (
    <Component
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {children}
    </Component>
  )
}

export type StaggerItemProps = {
  as?: ItemTag
  className?: string
  children: ReactNode
}

export function StaggerItem({ as = 'div', className, children }: StaggerItemProps) {
  const Component = as === 'li' ? m.li : m.div

  return (
    <Component className={className} variants={staggerItem}>
      {children}
    </Component>
  )
}
