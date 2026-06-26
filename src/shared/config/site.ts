export const siteConfig = {
  name: 'Kristyan Carvalho',
  title: 'Full-Stack Developer',
  url: 'https://kristyan.dev',
  blogUrl: 'https://blog.kristyan.dev',
  blogRssUrl: 'https://blog.kristyan.dev/rss.xml',
  social: {
    website: 'https://kristyan.dev',
    blog: 'https://blog.kristyan.dev',
    github: 'https://github.com/kristyancarvalho',
    linkedin: 'https://linkedin.com/in/kristyan-carvalho',
  },
  resume: {
    'pt-BR': '/cv/kristyan-carvalho-pt-br.pdf',
    en: '/cv/kristyan-carvalho-en.pdf',
  },
} as const

export type SocialKey = keyof typeof siteConfig.social
