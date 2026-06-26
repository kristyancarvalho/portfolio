import { Github, Globe, Linkedin, Newspaper } from 'lucide-react'
import { IconLink } from '@/shared/ui/IconLink'
import { siteConfig } from '@/shared/config/site'
import { cn } from '@/shared/lib/cn'

const socialLinks = [
  { key: 'website', href: siteConfig.social.website, label: 'Website', Icon: Globe },
  { key: 'blog', href: siteConfig.social.blog, label: 'Blog', Icon: Newspaper },
  { key: 'github', href: siteConfig.social.github, label: 'GitHub', Icon: Github },
  {
    key: 'linkedin',
    href: siteConfig.social.linkedin,
    label: 'LinkedIn',
    Icon: Linkedin,
  },
] as const

export function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      {socialLinks.map(({ key, href, label, Icon }) => (
        <IconLink key={key} href={href} label={label}>
          <Icon className="h-[1.05rem] w-[1.05rem]" aria-hidden="true" />
        </IconLink>
      ))}
    </div>
  )
}
