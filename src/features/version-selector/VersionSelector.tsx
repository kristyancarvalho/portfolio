import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from 'react'
import { AnimatePresence, m, useReducedMotion } from 'motion/react'
import { Check, ChevronDown, ExternalLink } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import {
  currentPortfolioVersion,
  portfolioVersions,
} from '@/entities/version/versions'
import type { PortfolioVersion } from '@/entities/version/model'
import { cn } from '@/shared/lib/cn'
import { interactiveTap, quickTransition } from '@/shared/lib/motion'

export function VersionSelector({ className }: { className?: string }) {
  const { t } = useTranslation()
  const shouldReduceMotion = useReducedMotion()
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const itemRefs = useRef<Array<HTMLButtonElement | null>>([])

  const currentIndex = Math.max(
    portfolioVersions.findIndex((version) => version.id === currentPortfolioVersion.id),
    0,
  )

  const focusItem = (index: number) => {
    window.requestAnimationFrame(() => itemRefs.current[index]?.focus())
  }

  const openAndFocus = (index: number) => {
    setOpen(true)
    focusItem(index)
  }

  const closeAndFocusButton = useCallback(() => {
    setOpen(false)
    buttonRef.current?.focus()
  }, [])

  const selectVersion = (version: PortfolioVersion) => {
    if (version.current || !version.href) {
      closeAndFocusButton()
      return
    }

    window.location.assign(version.href)
  }

  const optionLabel = (version: PortfolioVersion) =>
    version.current
      ? `${version.label}, ${t('version.current')}`
      : `${t('version.previous')}: ${version.label}`

  const handleButtonKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      openAndFocus(currentIndex)
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault()
      openAndFocus(portfolioVersions.length - 1)
    }
  }

  const handleMenuKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const activeIndex = itemRefs.current.findIndex((item) => item === document.activeElement)
    const nextIndex = activeIndex < 0 ? 0 : (activeIndex + 1) % portfolioVersions.length
    const previousIndex =
      activeIndex < 0
        ? portfolioVersions.length - 1
        : (activeIndex - 1 + portfolioVersions.length) % portfolioVersions.length

    if (event.key === 'Escape') {
      event.preventDefault()
      closeAndFocusButton()
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault()
      focusItem(nextIndex)
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault()
      focusItem(previousIndex)
    }

    if (event.key === 'Home') {
      event.preventDefault()
      focusItem(0)
    }

    if (event.key === 'End') {
      event.preventDefault()
      focusItem(portfolioVersions.length - 1)
    }
  }

  useEffect(() => {
    if (!open) {
      return
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeAndFocusButton()
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [closeAndFocusButton, open])

  return (
    <div
      ref={rootRef}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setOpen(false)
        }
      }}
      className={cn('relative inline-flex', className)}
    >
      <m.button
        ref={buttonRef}
        type="button"
        aria-label={`${t('version.label')}: ${currentPortfolioVersion.label}`}
        aria-haspopup="menu"
        aria-expanded={open}
        title={t('version.label')}
        data-state={open ? 'open' : 'closed'}
        onClick={() => setOpen((current) => !current)}
        onKeyDown={handleButtonKeyDown}
        whileHover={shouldReduceMotion ? undefined : { y: -2 }}
        whileTap={shouldReduceMotion ? undefined : interactiveTap}
        className="inline-flex h-9 items-center gap-1.5 rounded-full border border-border bg-surface px-3 text-xs font-semibold text-text-muted transition-colors duration-200 hover:border-primary hover:text-primary data-[state=open]:border-primary data-[state=open]:text-primary"
      >
        <span>{currentPortfolioVersion.label}</span>
        <m.span
          animate={{ rotate: open && !shouldReduceMotion ? 180 : 0 }}
          transition={quickTransition}
          className="inline-flex"
        >
          <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
        </m.span>
      </m.button>

      <AnimatePresence>
        {open ? (
          <m.div
            role="menu"
            aria-label={t('version.label')}
            onKeyDown={handleMenuKeyDown}
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -4, scale: 0.98 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
            exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -4, scale: 0.98 }}
            transition={quickTransition}
            className="absolute right-0 top-full z-50 mt-2 min-w-36 origin-top-right rounded-2xl border border-border bg-surface p-1.5 shadow-md"
          >
            {portfolioVersions.map((version, index) => (
              <button
                key={version.id}
                ref={(element) => {
                  itemRefs.current[index] = element
                }}
                type="button"
                role="menuitem"
                aria-current={version.current ? 'true' : undefined}
                aria-label={optionLabel(version)}
                title={version.current ? t('version.current') : t('version.previous')}
                onClick={() => selectVersion(version)}
                className={cn(
                  'flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2 text-left text-sm font-medium transition-colors duration-200',
                  version.current
                    ? 'bg-primary-soft text-primary-strong'
                    : 'text-text-muted hover:bg-surface-soft hover:text-text',
                )}
              >
                <span>{version.label}</span>
                {version.current ? (
                  <Check className="h-4 w-4" aria-hidden="true" />
                ) : version.external ? (
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                ) : null}
              </button>
            ))}
          </m.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}
