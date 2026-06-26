import { useState } from 'react'
import { Github, Menu, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { LanguageSwitcher } from '@/features/language-switcher/LanguageSwitcher'
import { ThemeToggle } from '@/features/theme-toggle/ThemeToggle'
import { Container } from '@/shared/ui/Container'
import { IconLink } from '@/shared/ui/IconLink'
import { navItems } from '@/shared/config/navigation'
import { siteConfig } from '@/shared/config/site'
import { cn } from '@/shared/lib/cn'
import { useActiveSection } from '@/widgets/header/useActiveSection'
import { useScrolled } from '@/widgets/header/useScrolled'

export function Header() {
  const { t } = useTranslation()
  const active = useActiveSection()
  const scrolled = useScrolled()
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-3 sm:pt-4">
      <Container>
        <div
          className={cn(
            'flex items-center justify-between gap-4 rounded-full border px-4 py-2 backdrop-blur transition-[background-color,box-shadow,border-color] duration-300 sm:px-5',
            scrolled
              ? 'border-border bg-surface/85 shadow-md supports-[backdrop-filter]:bg-surface/75'
              : 'border-border/70 bg-surface/60 shadow-sm supports-[backdrop-filter]:bg-surface/50',
          )}
        >
          <a
            href="#home"
            className="rounded-full px-1 text-sm font-semibold tracking-tight text-text transition-colors hover:text-primary"
            onClick={closeMenu}
          >
            Kristyan Carvalho
          </a>

          <nav
            aria-label={t('nav.primary')}
            className="hidden items-center gap-1 md:flex"
          >
            {navItems.map((item) => {
              const isActive = active === item.id
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  aria-current={isActive ? 'true' : undefined}
                  className={cn(
                    'relative rounded-full px-3 py-1.5 text-sm font-medium transition-colors',
                    isActive ? 'text-primary' : 'text-text-muted hover:text-text',
                  )}
                >
                  {t(item.labelKey)}
                  {isActive ? (
                    <span className="absolute -bottom-0.5 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-primary" />
                  ) : null}
                </a>
              )
            })}
          </nav>

          <div className="flex items-center gap-2">
            <IconLink
              href={siteConfig.social.github}
              label="GitHub"
              className="hidden h-9 w-9 sm:inline-flex"
            >
              <Github className="h-[1.05rem] w-[1.05rem]" aria-hidden="true" />
            </IconLink>
            <ThemeToggle className="h-9 w-9" />
            <LanguageSwitcher className="hidden sm:inline-flex" />
            <button
              type="button"
              aria-label={menuOpen ? t('nav.close') : t('nav.menu')}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen((open) => !open)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-text-muted transition-colors hover:border-primary hover:text-primary md:hidden"
            >
              {menuOpen ? (
                <X className="h-[1.05rem] w-[1.05rem]" aria-hidden="true" />
              ) : (
                <Menu className="h-[1.05rem] w-[1.05rem]" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {menuOpen ? (
          <nav
            id="mobile-navigation"
            aria-label={t('nav.primary')}
            className="mt-2 flex flex-col gap-1 rounded-3xl border border-border bg-surface p-3 shadow-md md:hidden"
          >
            {navItems.map((item) => {
              const isActive = active === item.id
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  aria-current={isActive ? 'true' : undefined}
                  onClick={closeMenu}
                  className={cn(
                    'rounded-2xl px-4 py-2.5 text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-primary-soft text-primary-strong'
                      : 'text-text-muted hover:bg-surface-soft hover:text-text',
                  )}
                >
                  {t(item.labelKey)}
                </a>
              )
            })}
            <div className="mt-2 flex items-center justify-between border-t border-border px-2 pt-3">
              <LanguageSwitcher />
              <IconLink href={siteConfig.social.github} label="GitHub" className="h-9 w-9">
                <Github className="h-[1.05rem] w-[1.05rem]" aria-hidden="true" />
              </IconLink>
            </div>
          </nav>
        ) : null}
      </Container>
    </header>
  )
}
