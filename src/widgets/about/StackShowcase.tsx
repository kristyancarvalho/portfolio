import { useReducedMotion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { featuredStack } from '@/entities/stack/stack'
import type { StackItem } from '@/entities/stack/model'
import { StackIcon } from '@/entities/stack/StackIcon'
import { Blob } from '@/widgets/decoration/Shapes'
import { cn } from '@/shared/lib/cn'

const edgeMask =
  'linear-gradient(to right, transparent, black 8%, black 92%, transparent)'

function StackChip({ item }: { item: StackItem }) {
  return (
    <span className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-text-muted shadow-sm transition-colors duration-200 hover:border-primary hover:text-text">
      <StackIcon slug={item.icon} className="h-4 w-4 shrink-0 text-primary" />
      {item.name}
    </span>
  )
}

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: StackItem[]
  reverse?: boolean
}) {
  return (
    <div
      className="group relative overflow-hidden py-1.5"
      style={{ maskImage: edgeMask, WebkitMaskImage: edgeMask }}
    >
      <ul
        className={cn(
          'flex w-max items-center gap-3',
          reverse ? 'animate-marquee-reverse' : 'animate-marquee',
          'group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused]',
        )}
      >
        {[...items, ...items].map((item, index) => (
          <li
            key={`${item.id}-${index}`}
            aria-hidden={index >= items.length ? true : undefined}
          >
            <StackChip item={item} />
          </li>
        ))}
      </ul>
    </div>
  )
}

function StaticGrid({ items }: { items: StackItem[] }) {
  return (
    <ul className="flex flex-wrap gap-2.5">
      {items.map((item) => (
        <li key={item.id}>
          <StackChip item={item} />
        </li>
      ))}
    </ul>
  )
}

export function StackShowcase() {
  const { t } = useTranslation()
  const reduceMotion = useReducedMotion()
  const half = Math.ceil(featuredStack.length / 2)
  const rowOne = featuredStack.slice(0, half)
  const rowTwo = featuredStack.slice(half)

  return (
    <div className="relative isolate mt-14">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <Blob className="right-[12%] top-[-3rem] h-56 w-56" tone="accent" />
      </div>
      <h3 className="text-lg font-semibold text-text">{t('about.stack.title')}</h3>
      <p className="type-body-muted mt-2 max-w-2xl">{t('about.stack.subtitle')}</p>

      {reduceMotion ? (
        <div className="mt-6">
          <StaticGrid items={featuredStack} />
        </div>
      ) : (
        <div className="mt-6 flex flex-col gap-3">
          <MarqueeRow items={rowOne} />
          <MarqueeRow items={rowTwo} reverse />
        </div>
      )}
    </div>
  )
}
