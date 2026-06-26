import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from '@/i18n/locales/en.json'
import ptBR from '@/i18n/locales/pt-BR.json'

export const supportedLanguages = ['pt-BR', 'en'] as const

export type Language = (typeof supportedLanguages)[number]

export const defaultLanguage: Language = 'pt-BR'

const STORAGE_KEY = 'portfolio-language'

function isLanguage(value: string | null): value is Language {
  return value === 'pt-BR' || value === 'en'
}

export function detectLanguage(): Language {
  if (typeof window === 'undefined') {
    return defaultLanguage
  }

  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (isLanguage(stored)) {
    return stored
  }

  const browser = window.navigator.language?.toLowerCase() ?? ''
  if (browser.startsWith('pt')) {
    return 'pt-BR'
  }
  if (browser.startsWith('en')) {
    return 'en'
  }

  return defaultLanguage
}

export function persistLanguage(language: Language): void {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(STORAGE_KEY, language)
  }
}

void i18n.use(initReactI18next).init({
  resources: {
    'pt-BR': { translation: ptBR },
    en: { translation: en },
  },
  lng: detectLanguage(),
  fallbackLng: defaultLanguage,
  supportedLngs: supportedLanguages,
  interpolation: { escapeValue: false },
  returnNull: false,
})

export default i18n
