import { Download } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import {
  buttonVariants,
  type ButtonSize,
  type ButtonVariant,
} from '@/shared/ui/buttonVariants'
import { siteConfig } from '@/shared/config/site'
import { cn } from '@/shared/lib/cn'

export type ResumeButtonProps = {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
}

export function ResumeButton({
  variant = 'primary',
  size = 'lg',
  className,
}: ResumeButtonProps) {
  const { t, i18n } = useTranslation()
  const language = i18n.language === 'en' ? 'en' : 'pt-BR'
  const resumeHref = siteConfig.resume[language]

  return (
    <a
      href={resumeHref}
      download
      className={cn(buttonVariants({ variant, size }), className)}
    >
      <Download className="h-[1.1rem] w-[1.1rem]" aria-hidden="true" />
      {t('hero.downloadResume')}
    </a>
  )
}
