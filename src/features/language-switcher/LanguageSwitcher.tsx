import { useTranslation } from 'react-i18next'
import { persistLanguage, supportedLanguages, type Language } from '@/i18n'
import { cn } from '@/shared/lib/cn'

const shortLabels: Record<Language, string> = {
  'pt-BR': 'PT',
  en: 'EN',
}

export function LanguageSwitcher({ className }: { className?: string }) {
  const { i18n, t } = useTranslation()
  const current = (supportedLanguages.find((language) => i18n.language === language) ??
    supportedLanguages[0]) as Language

  const changeLanguage = (language: Language) => {
    if (language === current) {
      return
    }
    persistLanguage(language)
    void i18n.changeLanguage(language)
  }

  return (
    <div
      role="group"
      aria-label={t('language.label')}
      className={cn(
        'inline-flex items-center gap-0.5 rounded-full border border-border bg-surface p-0.5',
        className,
      )}
    >
      {supportedLanguages.map((language) => {
        const isActive = current === language
        return (
          <button
            key={language}
            type="button"
            aria-pressed={isActive}
            aria-label={t(`language.${language}`)}
            onClick={() => changeLanguage(language)}
            className={cn(
              'rounded-full px-2.5 py-1 text-xs font-semibold transition-colors duration-200',
              isActive
                ? 'bg-primary text-white'
                : 'text-text-muted hover:text-text',
            )}
          >
            {shortLabels[language]}
          </button>
        )
      })}
    </div>
  )
}
