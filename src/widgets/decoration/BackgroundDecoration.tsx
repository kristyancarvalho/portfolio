import { m, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { OrbitRing } from '@/widgets/decoration/Shapes'

const gridStyle = {
  backgroundImage:
    'linear-gradient(to right, rgb(var(--color-border) / 0.55) 1px, transparent 1px), linear-gradient(to bottom, rgb(var(--color-border) / 0.55) 1px, transparent 1px)',
  backgroundSize: '68px 68px',
  maskImage: 'radial-gradient(ellipse at 50% 0%, black 10%, transparent 70%)',
  WebkitMaskImage: 'radial-gradient(ellipse at 50% 0%, black 10%, transparent 70%)',
}

const primaryGlowStyle = {
  background:
    'radial-gradient(circle at center, rgb(var(--color-primary) / 0.18), transparent 70%)',
}

const accentGlowStyle = {
  background:
    'radial-gradient(circle at center, rgb(var(--color-accent) / 0.14), transparent 70%)',
}

const dotFieldStyle = {
  backgroundImage:
    'radial-gradient(rgb(var(--color-primary) / 0.18) 1px, transparent 1.6px)',
  backgroundSize: '20px 20px',
  maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 72%)',
  WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 72%)',
}

export function BackgroundDecoration() {
  const reduceMotion = useReducedMotion()
  const { scrollY } = useScroll()
  const primaryY = useTransform(scrollY, [0, 1400], [0, 180])
  const accentY = useTransform(scrollY, [0, 1400], [0, -150])
  const dotsY = useTransform(scrollY, [0, 1600], [0, 90])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-60" style={gridStyle} />
      <m.div
        className="absolute left-1/2 top-[-12rem] h-[34rem] w-[34rem] rounded-full blur-3xl"
        style={{ ...primaryGlowStyle, x: '-50%', y: reduceMotion ? 0 : primaryY }}
      />
      <m.div
        className="absolute right-[-10rem] top-[6rem] h-[26rem] w-[26rem] rounded-full blur-3xl"
        style={{ ...accentGlowStyle, y: reduceMotion ? 0 : accentY }}
      />
      <OrbitRing className="right-[-9rem] top-[18rem] h-[30rem] w-[30rem] opacity-70" duration={120} />
      <m.div
        className="absolute bottom-[8rem] left-[-4rem] h-[22rem] w-[22rem]"
        style={{ ...dotFieldStyle, y: reduceMotion ? 0 : dotsY }}
      />
    </div>
  )
}
