import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

function setAttribute(selector: string, value: string): void {
  const element = document.querySelector(selector)
  if (element) {
    element.setAttribute('content', value)
  }
}

export function useDocumentMeta(): void {
  const { t, i18n } = useTranslation()

  useEffect(() => {
    const title = t('meta.title')
    const description = t('meta.description')
    const locale = i18n.language === 'en' ? 'en_US' : 'pt_BR'

    document.title = title
    setAttribute('meta[name="description"]', description)
    setAttribute('meta[property="og:title"]', title)
    setAttribute('meta[property="og:description"]', description)
    setAttribute('meta[property="og:locale"]', locale)
    setAttribute('meta[name="twitter:title"]', title)
    setAttribute('meta[name="twitter:description"]', description)
  }, [t, i18n.language])
}
