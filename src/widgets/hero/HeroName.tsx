import { m, useReducedMotion } from 'motion/react'
import { easeSoft } from '@/shared/lib/motion'

export function HeroName({ name }: { name: string }) {
  const reduceMotion = useReducedMotion()

  return (
    <m.h1
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 22, scale: 0.97 }}
      animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: easeSoft, delay: 0.18 }}
      className="text-balance bg-gradient-to-br from-text via-primary to-accent bg-clip-text pb-2 text-[clamp(3rem,10vw,6.5rem)] font-extrabold leading-[1.04] tracking-tight text-transparent"
    >
      {name}
    </m.h1>
  )
}
