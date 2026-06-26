import { cn } from '@/shared/lib/cn'

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'

const baseClasses =
  'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors duration-200 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-60'

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-primary text-white hover:bg-primary-strong',
  secondary: 'bg-surface-strong text-text hover:bg-surface-soft',
  outline:
    'border border-border-strong bg-transparent text-text hover:border-primary hover:text-primary',
  ghost: 'bg-transparent text-text-muted hover:bg-surface-soft hover:text-text',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-6 text-base',
}

export function buttonVariants(
  options: { variant?: ButtonVariant; size?: ButtonSize } = {},
): string {
  const { variant = 'primary', size = 'md' } = options
  return cn(baseClasses, variantClasses[variant], sizeClasses[size])
}
