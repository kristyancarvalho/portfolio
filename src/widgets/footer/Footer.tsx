import { useTranslation } from 'react-i18next'
import { Container } from '@/shared/ui/Container'
import { SocialLinks } from '@/shared/ui/SocialLinks'
import { navItems } from '@/shared/config/navigation'

const currentYear = new Date().getFullYear()

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="border-t border-border bg-background-soft">
      <Container className="flex flex-col gap-10 py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm space-y-4">
            <a
              href="#home"
              className="text-base font-semibold text-text transition-colors hover:text-primary"
            >
              Kristyan Carvalho
            </a>
            <p className="type-caption">{t('footer.tagline')}</p>
            <SocialLinks />
          </div>

          <nav
            aria-label={t('nav.primary')}
            className="grid grid-cols-2 gap-x-12 gap-y-2.5"
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-sm text-text-muted transition-colors hover:text-primary"
              >
                {t(item.labelKey)}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-2 border-t border-border pt-6 text-sm text-text-soft sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} Kristyan Carvalho. {t('footer.rights')}
          </p>
          <p>{t('footer.builtWith')}</p>
        </div>
      </Container>
    </footer>
  )
}
