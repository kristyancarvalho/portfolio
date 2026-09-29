const primaryGlowStyle = {
  background:
    'radial-gradient(circle at center, rgb(var(--color-primary) / 0.08), transparent 70%)',
}

const accentGlowStyle = {
  background:
    'radial-gradient(circle at center, rgb(var(--color-accent) / 0.06), transparent 70%)',
}

export function BackgroundDecoration() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div
        className="absolute left-1/2 top-[-16rem] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full blur-3xl"
        style={primaryGlowStyle}
      />
      <div
        className="absolute bottom-[-12rem] right-[-10rem] h-[28rem] w-[28rem] rounded-full blur-3xl"
        style={accentGlowStyle}
      />
    </div>
  )
}
