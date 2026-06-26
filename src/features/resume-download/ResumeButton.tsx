import { Download } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { ButtonLink } from '@/shared/ui/ButtonLink'
import {
  type ButtonSize,
  type ButtonVariant,
} from '@/shared/ui/buttonVariants'
import { siteConfig } from '@/shared/config/site'

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
    <ButtonLink href={resumeHref} download variant={variant} size={size} className={className}>
      <Download className="h-[1.1rem] w-[1.1rem]" aria-hidden="true" />
      {t('hero.downloadResume')}
    </ButtonLink>
  )
}
