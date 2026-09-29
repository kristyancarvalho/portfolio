import type { Language } from '@/i18n'

export type LocalizedText = Record<Language, string>

export type ProjectLinks = {
  github?: string
  demo?: string
  website?: string
}

export type Project = {
  id: string
  featured: boolean
  platform: string
  category: string
  stack: string[]
  title: LocalizedText
  description: LocalizedText
  links: ProjectLinks
}
