import { m } from 'motion/react'
import { cn } from '@/shared/lib/cn'

type ShapeProps = {
  className?: string
}

export function Blob({
  className,
  tone = 'primary',
}: ShapeProps & { tone?: 'primary' | 'accent' }) {
  const variable = tone === 'accent' ? '--color-accent' : '--color-primary'

  return (
    <m.div
      aria-hidden="true"
      className={cn('pointer-events-none absolute rounded-full blur-3xl', className)}
      style={{
        background: `radial-gradient(circle at center, rgb(var(${variable}) / 0.16), transparent 70%)`,
      }}
      animate={{ y: [0, -18, 0], scale: [1, 1.06, 1] }}
      transition={{ repeat: Infinity, duration: 14, ease: 'easeInOut' }}
    />
  )
}

export function OrbitRing({
  className,
  duration = 90,
  reverse = false,
}: ShapeProps & { duration?: number; reverse?: boolean }) {
  return (
    <m.div
      aria-hidden="true"
      className={cn('pointer-events-none absolute', className)}
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{ repeat: Infinity, ease: 'linear', duration }}
    >
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <circle
          cx="50"
          cy="50"
          r="48"
          fill="none"
          stroke="rgb(var(--color-primary) / 0.16)"
          strokeWidth="0.4"
        />
        <circle
          cx="50"
          cy="50"
          r="34"
          fill="none"
          stroke="rgb(var(--color-border-strong) / 0.55)"
          strokeWidth="0.3"
          strokeDasharray="1 3"
        />
        <circle cx="50" cy="2" r="1.6" fill="rgb(var(--color-accent) / 0.7)" />
        <circle cx="84" cy="50" r="1.1" fill="rgb(var(--color-primary) / 0.6)" />
      </svg>
    </m.div>
  )
}
