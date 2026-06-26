const gridStyle = {
  backgroundImage:
    'linear-gradient(to right, rgb(var(--color-border) / 0.55) 1px, transparent 1px), linear-gradient(to bottom, rgb(var(--color-border) / 0.55) 1px, transparent 1px)',
  backgroundSize: '68px 68px',
  maskImage: 'radial-gradient(ellipse at 50% 0%, black 10%, transparent 70%)',
  WebkitMaskImage: 'radial-gradient(ellipse at 50% 0%, black 10%, transparent 70%)',
}

const primaryGlowStyle = {
  background:
    'radial-gradient(circle at center, rgb(var(--color-primary) / 0.18), transparent 70%)',
}

const accentGlowStyle = {
  background:
    'radial-gradient(circle at center, rgb(var(--color-accent) / 0.14), transparent 70%)',
}

export function BackgroundDecoration() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-60" style={gridStyle} />
      <div
        className="absolute left-1/2 top-[-12rem] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full blur-3xl"
        style={primaryGlowStyle}
      />
      <div
        className="absolute right-[-10rem] top-[6rem] h-[26rem] w-[26rem] rounded-full blur-3xl"
        style={accentGlowStyle}
      />
    </div>
  )
}
