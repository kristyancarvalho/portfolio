import { useEffect, type ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18n from '@/i18n'

function applyHtmlLang(language: string): void {
  document.documentElement.lang = language
}

export function I18nProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    applyHtmlLang(i18n.language)

    const handleChange = (language: string) => applyHtmlLang(language)
    i18n.on('languageChanged', handleChange)

    return () => {
      i18n.off('languageChanged', handleChange)
    }
  }, [])

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}
