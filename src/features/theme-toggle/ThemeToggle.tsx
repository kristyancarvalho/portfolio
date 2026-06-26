import { Monitor, Moon, Sun, type LucideIcon } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import {
  useTheme,
  type ThemePreference,
} from '@/app/providers/theme-context'
import { cn } from '@/shared/lib/cn'

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
    <button
      type="button"
      onClick={() => setTheme(nextTheme[theme])}
      aria-label={t('theme.label')}
      title={t(`theme.${theme}`)}
      className={cn(
        'inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-text-muted transition-colors duration-200 hover:border-primary hover:text-primary',
        className,
      )}
    >
      <Icon className="h-[1.1rem] w-[1.1rem]" aria-hidden="true" />
    </button>
  )
}
