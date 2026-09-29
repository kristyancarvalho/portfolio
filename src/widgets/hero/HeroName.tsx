import { m, useReducedMotion } from 'motion/react'
import { easeSoft } from '@/shared/lib/motion'

export function HeroName({ name }: { name: string }) {
  const reduceMotion = useReducedMotion()
  const words = name.split(' ')

  return (
    <h1
      className="text-balance bg-gradient-to-br from-text via-primary to-accent bg-clip-text pb-2 text-[clamp(3rem,10vw,6.5rem)] font-extrabold leading-[1.04] tracking-tight text-transparent"
    >
      <span className="sr-only">{name}</span>
      <span aria-hidden="true" className="inline-flex flex-wrap justify-center gap-x-[0.22em]">
        {words.map((word, index) => (
          <m.span
            key={word}
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0 : 0.58,
              ease: easeSoft,
              delay: reduceMotion ? 0 : 0.16 + index * 0.09,
            }}
          >
            {word}
          </m.span>
        ))}
      </span>
    </h1>
  )
}
