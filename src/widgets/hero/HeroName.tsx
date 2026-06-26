import { m, useReducedMotion } from 'motion/react'
import type { Variants } from 'motion/react'
import { easeSoft } from '@/shared/lib/motion'

const penEase: [number, number, number, number] = [0.32, 0, 0.67, 0]

const wordVariants: Variants = {
  hidden: { clipPath: 'inset(-0.5em 100% -0.5em -0.25em)' },
  visible: (delay: number) => ({
    clipPath: 'inset(-0.5em 0% -0.5em -0.25em)',
    transition: { duration: 0.6, ease: penEase, delay },
  }),
}

export function HeroName({ name }: { name: string }) {
  const reduceMotion = useReducedMotion()
  const words = name.split(' ')

  return (
    <h1
      aria-label={name}
      className="font-signature text-[clamp(4.5rem,19vw,11rem)] leading-[0.92]"
    >
      {words.map((word, index) => {
        const className =
          'block w-fit bg-gradient-to-br from-text to-primary bg-clip-text px-[0.12em] pb-[0.18em] text-transparent'

        if (reduceMotion) {
          return (
            <m.span
              key={word}
              aria-hidden="true"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, ease: easeSoft, delay: index * 0.1 }}
              className={className}
            >
              {word}
            </m.span>
          )
        }

        return (
          <m.span
            key={word}
            aria-hidden="true"
            variants={wordVariants}
            custom={0.2 + index * 0.4}
            initial="hidden"
            animate="visible"
            className={className}
          >
            {word}
          </m.span>
        )
      })}
    </h1>
  )
}
