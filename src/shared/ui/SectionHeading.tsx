import { Stagger, StaggerItem } from '@/shared/ui/Stagger'
import { cn } from '@/shared/lib/cn'

export type SectionHeadingProps = {
  eyebrow: string
  title: string
  subtitle?: string
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  className,
}: SectionHeadingProps) {
  return (
    <Stagger className={className}>
      <StaggerItem>
        <p className="type-badge text-primary">{eyebrow}</p>
      </StaggerItem>
      <StaggerItem>
        <h2 className="type-heading mt-2">{title}</h2>
      </StaggerItem>
      {subtitle ? (
        <StaggerItem>
          <p className={cn('type-body-muted mt-3 max-w-2xl')}>{subtitle}</p>
        </StaggerItem>
      ) : null}
    </Stagger>
  )
}
