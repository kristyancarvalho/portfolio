import { useTranslation } from 'react-i18next'
import { LanguageSwitcher } from '@/features/language-switcher/LanguageSwitcher'
import { Container } from '@/shared/ui/Container'

export function App() {
  const { t } = useTranslation()

  return (
    <main className="flex min-h-screen items-center">
      <Container className="flex flex-col items-center gap-6 text-center">
        <LanguageSwitcher />
        <h1 className="type-display">Kristyan Carvalho</h1>
        <p className="type-subheading">{t('nav.home')}</p>
      </Container>
    </main>
  )
}
