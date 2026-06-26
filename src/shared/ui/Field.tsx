import type { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'
import { AnimatePresence, m } from 'motion/react'
import { cn } from '@/shared/lib/cn'
import { quickTransition } from '@/shared/lib/motion'

const controlClasses =
  'w-full rounded-xl border border-border bg-surface px-3.5 py-2.5 text-sm text-text placeholder:text-text-soft transition-[border-color,box-shadow] duration-200 focus-visible:border-primary focus-visible:shadow-[0_0_0_3px_rgb(var(--color-primary)/0.18)] focus-visible:outline-none'

type FieldBase = {
  id: string
  label: string
  error?: string
}

function FieldError({ id, error }: { id?: string; error?: string }) {
  return (
    <AnimatePresence initial={false}>
      {error ? (
        <m.p
          key="error"
          id={id}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={quickTransition}
          className="overflow-hidden text-xs text-danger"
        >
          {error}
        </m.p>
      ) : null}
    </AnimatePresence>
  )
}

export function TextField({
  id,
  label,
  error,
  className,
  ...props
}: FieldBase & InputHTMLAttributes<HTMLInputElement>) {
  const errorId = error ? `${id}-error` : undefined

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-text">
        {label}
      </label>
      <input
        id={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={errorId}
        className={cn(controlClasses, error && 'border-danger', className)}
        {...props}
      />
      <FieldError id={errorId} error={error} />
    </div>
  )
}

export function TextAreaField({
  id,
  label,
  error,
  className,
  rows = 5,
  ...props
}: FieldBase & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const errorId = error ? `${id}-error` : undefined

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-text">
        {label}
      </label>
      <textarea
        id={id}
        rows={rows}
        aria-invalid={error ? true : undefined}
        aria-describedby={errorId}
        className={cn(controlClasses, 'resize-y', error && 'border-danger', className)}
        {...props}
      />
      <FieldError id={errorId} error={error} />
    </div>
  )
}
