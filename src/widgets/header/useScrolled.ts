import { useState } from 'react'
import { useMotionValueEvent, useScroll } from 'motion/react'

export function useScrolled(threshold = 16): boolean {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)

  useMotionValueEvent(scrollY, 'change', (value) => {
    setScrolled(value > threshold)
  })

  return scrolled
}
