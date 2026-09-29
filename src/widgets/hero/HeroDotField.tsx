import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'motion/react'

export function HeroDotField() {
  const fieldRef = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const field = fieldRef.current
    const hero = field?.closest('section')
    const finePointer = window.matchMedia('(pointer: fine)')

    if (!field || !hero || reduceMotion || !finePointer.matches) return

    const updatePosition = (event: PointerEvent) => {
      const bounds = hero.getBoundingClientRect()
      field.style.setProperty('--dot-x', `${event.clientX - bounds.left}px`)
      field.style.setProperty('--dot-y', `${event.clientY - bounds.top}px`)
      field.dataset.active = 'true'
    }

    const reset = () => {
      delete field.dataset.active
    }

    hero.addEventListener('pointermove', updatePosition, { passive: true })
    hero.addEventListener('pointerleave', reset)

    return () => {
      hero.removeEventListener('pointermove', updatePosition)
      hero.removeEventListener('pointerleave', reset)
    }
  }, [reduceMotion])

  return (
    <div ref={fieldRef} className="hero-dot-field" aria-hidden="true">
      <div className="hero-dot-field-base" />
      {!reduceMotion && (
        <>
          <div className="hero-dot-field-glow" />
          <div className="hero-dot-field-response" />
        </>
      )}
    </div>
  )
}
