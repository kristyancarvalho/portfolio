import { cn } from '@/shared/lib/cn'

const profileRows = [
  { key: 'role', value: 'full-stack developer' },
  { key: 'focus', value: 'backend · ui · cli · automation' },
  { key: 'stack', value: 'go · typescript · react · postgres' },
  { key: 'status', value: 'building useful things' },
]

export function HeroArtifact({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'relative w-full rounded-2xl border border-border bg-surface/90 p-5 shadow-lg backdrop-blur-sm',
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-border pb-3">
        <span className="h-2.5 w-2.5 rounded-full bg-danger/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-warning/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-success/70" />
        <span className="ml-2 font-mono text-xs text-text-soft">
          ~/kristyan/profile
        </span>
      </div>
      <dl className="mt-4 space-y-2.5 font-mono text-sm">
        {profileRows.map((row) => (
          <div key={row.key} className="flex flex-wrap gap-x-2">
            <dt className="text-primary">{row.key}:</dt>
            <dd className="text-text-muted">{row.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
