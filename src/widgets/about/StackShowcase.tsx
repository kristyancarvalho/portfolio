import { useReducedMotion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { featuredStack } from '@/entities/stack/stack'
import type { StackItem } from '@/entities/stack/model'
import { StackIcon } from '@/entities/stack/StackIcon'

const edgeMask =
  'linear-gradient(to right, transparent, black 8%, black 92%, transparent)'

function Technology({ item }: { item: StackItem }) {
  return (
    <span className="inline-flex items-center gap-2.5 whitespace-nowrap text-sm font-medium text-text-muted transition-colors duration-200 group-hover/item:text-text">
      <StackIcon
        slug={item.icon}
        className="h-5 w-5 shrink-0 text-primary-strong"
      />
      {item.name}
    </span>
  )
}

function TechnologyList({
  items,
  hidden = false,
}: {
  items: StackItem[]
  hidden?: boolean
}) {
  return (
    <ul
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center gap-8 pr-8"
    >
      {items.map((item) => (
        <li key={item.id} className="group/item">
          <Technology item={item} />
        </li>
      ))}
    </ul>
  )
}

function StaticGrid({ items }: { items: StackItem[] }) {
  return (
    <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3 lg:grid-cols-5">
      {items.map((item) => (
        <li key={item.id} className="group/item min-w-0">
          <Technology item={item} />
        </li>
      ))}
    </ul>
  )
}

export function StackShowcase() {
  const { t } = useTranslation()
  const reduceMotion = useReducedMotion()

  return (
    <div className="mt-14">
      <h3 className="text-lg font-semibold text-text">{t('about.stack.title')}</h3>
      <p className="type-body-muted mt-2 max-w-2xl">{t('about.stack.subtitle')}</p>

      {reduceMotion ? (
        <StaticGrid items={featuredStack} />
      ) : (
        <div
          role="region"
          aria-label={t('about.stack.ariaLabel')}
          tabIndex={0}
          className="group/loop relative mt-6 overflow-hidden rounded-2xl border border-border bg-surface/70 py-5 shadow-sm transition-colors duration-200 hover:border-border-strong focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-background-soft"
        >
          <div style={{ maskImage: edgeMask, WebkitMaskImage: edgeMask }}>
            <div className="flex w-max animate-logo-loop group-hover/loop:[animation-play-state:paused] group-focus/loop:[animation-play-state:paused]">
              <TechnologyList items={featuredStack} />
              <TechnologyList items={featuredStack} hidden />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
