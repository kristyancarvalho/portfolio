import { AnimatePresence, m } from 'motion/react'
import { Monitor, Moon, Sun, type LucideIcon } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import {
  useTheme,
  type ThemePreference,
} from '@/app/providers/theme-context'
import { cn } from '@/shared/lib/cn'
import { interactiveTap, quickTransition } from '@/shared/lib/motion'

const nextTheme: Record<ThemePreference, ThemePreference> = {
  light: 'dark',
  dark: 'system',
  system: 'light',
}

const themeIcon: Record<ThemePreference, LucideIcon> = {
  light: Sun,
  dark: Moon,
  system: Monitor,
}

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme()
  const { t } = useTranslation()
  const Icon = themeIcon[theme]

  return (
    <m.button
      type="button"
      onClick={() => setTheme(nextTheme[theme])}
      aria-label={t('theme.label')}
      title={t(`theme.${theme}`)}
      whileHover={{ y: -2 }}
      whileTap={interactiveTap}
      className={cn(
        'inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-border bg-surface text-text-muted transition-colors duration-200 hover:border-primary hover:text-primary',
        className,
      )}
    >
      <AnimatePresence mode="wait" initial={false}>
        <m.span
          key={theme}
          initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
          transition={quickTransition}
          className="inline-flex"
        >
          <Icon className="h-[1.1rem] w-[1.1rem]" aria-hidden="true" />
        </m.span>
      </AnimatePresence>
    </m.button>
  )
}
