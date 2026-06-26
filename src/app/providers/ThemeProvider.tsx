import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import {
  ThemeContext,
  type ResolvedTheme,
  type ThemePreference,
} from '@/app/providers/theme-context'

const STORAGE_KEY = 'portfolio-theme'

const themeColor: Record<ResolvedTheme, string> = {
  light: '#f6f8fc',
  dark: '#0a1626',
}

function getSystemTheme(): ResolvedTheme {
  if (typeof window === 'undefined' || !window.matchMedia) {
    return 'light'
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function readStoredTheme(): ThemePreference {
  if (typeof window === 'undefined') {
    return 'system'
  }
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'light' || stored === 'dark' || stored === 'system') {
    return stored
  }
  return 'system'
}

function resolveTheme(preference: ThemePreference): ResolvedTheme {
  return preference === 'system' ? getSystemTheme() : preference
}

function applyTheme(resolved: ResolvedTheme): void {
  const root = document.documentElement
  root.classList.toggle('dark', resolved === 'dark')
  root.style.colorScheme = resolved

  const meta = document.querySelector('meta[name="theme-color"]')
  if (meta) {
    meta.setAttribute('content', themeColor[resolved])
  }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemePreference>(() => readStoredTheme())
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>(() =>
    resolveTheme(readStoredTheme()),
  )

  useEffect(() => {
    const resolved = resolveTheme(theme)
    setResolvedTheme(resolved)
    applyTheme(resolved)
  }, [theme])

  useEffect(() => {
    if (theme !== 'system') {
      return
    }

    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => {
      const resolved = getSystemTheme()
      setResolvedTheme(resolved)
      applyTheme(resolved)
    }

    media.addEventListener('change', handleChange)
    return () => media.removeEventListener('change', handleChange)
  }, [theme])

  const setTheme = useCallback((next: ThemePreference) => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, next)
    }
    setThemeState(next)
  }, [])

  const value = useMemo(
    () => ({ theme, resolvedTheme, setTheme }),
    [theme, resolvedTheme, setTheme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
