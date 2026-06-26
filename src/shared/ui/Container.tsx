import type { HTMLAttributes } from 'react'
import { cn } from '@/shared/lib/cn'

export function Container({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('mx-auto w-full max-w-content px-6 sm:px-8', className)} {...props} />
  )
}
