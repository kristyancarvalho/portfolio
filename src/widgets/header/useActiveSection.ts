import { useEffect, useState } from 'react'
import { sectionIds, type SectionId } from '@/shared/config/navigation'

export function useActiveSection(): SectionId {
  const [active, setActive] = useState<SectionId>(sectionIds[0])

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null)

    if (elements.length === 0) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        const top = visible[0]
        if (top) {
          setActive(top.target.id as SectionId)
        }
      },
      {
        rootMargin: '-45% 0px -45% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return active
}
