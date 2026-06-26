import { useState } from 'react'
import { AnimatePresence, m } from 'motion/react'
import { Github, Menu, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { LanguageSwitcher } from '@/features/language-switcher/LanguageSwitcher'
import { ThemeToggle } from '@/features/theme-toggle/ThemeToggle'
import { Container } from '@/shared/ui/Container'
import { IconLink } from '@/shared/ui/IconLink'
import { ScrollProgress } from '@/shared/ui/ScrollProgress'
import { navItems } from '@/shared/config/navigation'
import { siteConfig } from '@/shared/config/site'
import { cn } from '@/shared/lib/cn'
import {
  interactiveTap,
  menuItemVariants,
  menuVariants,
  overlayVariants,
  quickTransition,
  springTransition,
} from '@/shared/lib/motion'
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
      <ScrollProgress />

      <AnimatePresence>
        {menuOpen ? (
          <m.div
            key="backdrop"
            aria-hidden="true"
            onClick={closeMenu}
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-background/50 backdrop-blur-sm md:hidden"
          />
        ) : null}
      </AnimatePresence>

      <Container>
        <div
          className={cn(
            'relative z-10 flex items-center justify-between gap-4 rounded-full border px-4 py-2 backdrop-blur transition-[background-color,box-shadow,border-color] duration-300 sm:px-5',
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
                    <m.span
                      layoutId="nav-active-indicator"
                      transition={springTransition}
                      className="absolute inset-x-2.5 -bottom-0.5 h-0.5 rounded-full bg-primary"
                    />
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
            <m.button
              type="button"
              aria-label={menuOpen ? t('nav.close') : t('nav.menu')}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen((open) => !open)}
              whileTap={interactiveTap}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-text-muted transition-colors hover:border-primary hover:text-primary md:hidden"
            >
              <AnimatePresence mode="wait" initial={false}>
                {menuOpen ? (
                  <m.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={quickTransition}
                    className="inline-flex"
                  >
                    <X className="h-[1.05rem] w-[1.05rem]" aria-hidden="true" />
                  </m.span>
                ) : (
                  <m.span
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={quickTransition}
                    className="inline-flex"
                  >
                    <Menu className="h-[1.05rem] w-[1.05rem]" aria-hidden="true" />
                  </m.span>
                )}
              </AnimatePresence>
            </m.button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen ? (
            <m.nav
              id="mobile-navigation"
              key="mobile-nav"
              aria-label={t('nav.primary')}
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative z-10 mt-2 flex flex-col gap-1 rounded-3xl border border-border bg-surface p-3 shadow-md md:hidden"
            >
              {navItems.map((item) => {
                const isActive = active === item.id
                return (
                  <m.a
                    key={item.id}
                    variants={menuItemVariants}
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
                  </m.a>
                )
              })}
              <m.div
                variants={menuItemVariants}
                className="mt-2 flex items-center justify-between border-t border-border px-2 pt-3"
              >
                <LanguageSwitcher />
                <IconLink href={siteConfig.social.github} label="GitHub" className="h-9 w-9">
                  <Github className="h-[1.05rem] w-[1.05rem]" aria-hidden="true" />
                </IconLink>
              </m.div>
            </m.nav>
          ) : null}
        </AnimatePresence>
      </Container>
    </header>
  )
}
