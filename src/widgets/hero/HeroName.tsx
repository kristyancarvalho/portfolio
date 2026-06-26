import { m, useReducedMotion } from 'motion/react'
import { easeSoft } from '@/shared/lib/motion'

export function HeroName({ name }: { name: string }) {
  const reduceMotion = useReducedMotion()

  return (
    <m.h1
      className="font-signature bg-gradient-to-br from-text to-primary bg-clip-text pb-2 text-[3.25rem] leading-[0.95] text-transparent sm:text-7xl lg:text-8xl"
      initial={
        reduceMotion
          ? { opacity: 0 }
          : { opacity: 1, clipPath: 'inset(0% 100% 0% 0%)' }
      }
      animate={
        reduceMotion
          ? { opacity: 1 }
          : { opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' }
      }
      transition={
        reduceMotion
          ? { duration: 0.4, ease: easeSoft }
          : { duration: 1.1, ease: easeSoft, delay: 0.15 }
      }
    >
      {name}
    </m.h1>
  )
}
