export const sectionIds = ['home', 'about', 'projects', 'posts', 'contact'] as const

export type SectionId = (typeof sectionIds)[number]

export type NavItem = {
  id: SectionId
  labelKey: string
}

export const navItems: NavItem[] = [
  { id: 'home', labelKey: 'nav.home' },
  { id: 'about', labelKey: 'nav.about' },
  { id: 'projects', labelKey: 'nav.projects' },
  { id: 'posts', labelKey: 'nav.posts' },
  { id: 'contact', labelKey: 'nav.contact' },
]
