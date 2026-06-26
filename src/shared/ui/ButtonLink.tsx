import { m, type HTMLMotionProps } from 'motion/react'
import { cn } from '@/shared/lib/cn'
import {
  buttonVariants,
  type ButtonSize,
  type ButtonVariant,
} from '@/shared/ui/buttonVariants'
import { interactiveHover, interactiveTap, springTransition } from '@/shared/lib/motion'

export type ButtonLinkProps = HTMLMotionProps<'a'> & {
  variant?: ButtonVariant
  size?: ButtonSize
}

export function ButtonLink({
  variant,
  size,
  className,
  ...props
}: ButtonLinkProps) {
  return (
    <m.a
      whileHover={interactiveHover}
      whileTap={interactiveTap}
      transition={springTransition}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
}
