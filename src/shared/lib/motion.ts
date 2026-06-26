import type { Transition, Variants } from 'motion/react'

export const easeSoft: [number, number, number, number] = [0.22, 1, 0.36, 1]
export const easeEmphasized: [number, number, number, number] = [0.16, 1, 0.3, 1]

export const durations = {
  fast: 0.2,
  base: 0.45,
  slow: 0.65,
} as const

export const baseTransition: Transition = {
  duration: durations.base,
  ease: easeSoft,
}

export const quickTransition: Transition = {
  duration: durations.fast,
  ease: easeSoft,
}

export const springTransition: Transition = {
  type: 'spring',
  stiffness: 380,
  damping: 30,
  mass: 0.8,
}

export const viewportOnce = { once: true, margin: '-80px' } as const

export const revealVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: durations.base, ease: easeSoft, delay },
  }),
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.04 },
  },
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: baseTransition },
}

export const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: baseTransition },
}

export const overlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: quickTransition },
  exit: { opacity: 0, transition: quickTransition },
}

export const menuVariants: Variants = {
  hidden: { opacity: 0, y: -10, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { ...baseTransition, staggerChildren: 0.05, delayChildren: 0.05 },
  },
  exit: { opacity: 0, y: -10, scale: 0.97, transition: quickTransition },
}

export const menuItemVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: baseTransition },
  exit: { opacity: 0, transition: quickTransition },
}

export const interactiveHover = { y: -2 }

export const interactiveTap = { scale: 0.96 }

export const liftHover = { y: -6 }
