import { createContext, useContext } from 'react'

export type ThemePreference = 'light' | 'dark' | 'system'
export type ResolvedTheme = 'light' | 'dark'

export type ThemeContextValue = {
  theme: ThemePreference
  resolvedTheme: ResolvedTheme
  setTheme: (theme: ThemePreference) => void
}

export const ThemeContext = createContext<ThemeContextValue | null>(null)

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }

  return context
}
