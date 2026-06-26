import type { ButtonHTMLAttributes } from 'react'
import { cn } from '@/shared/lib/cn'
import {
  buttonVariants,
  type ButtonSize,
  type ButtonVariant,
} from '@/shared/ui/buttonVariants'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  size?: ButtonSize
}

export function Button({
  variant,
  size,
  className,
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
}
