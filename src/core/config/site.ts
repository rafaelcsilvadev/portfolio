export const siteConfig = {
  name: 'Rafael Couto Silva',
  url: 'https://portfolio-blush-eta-35.vercel.app',
  ogImage: 'https://portfolio-blush-eta-35.vercel.app/og.png',
  description: 'Desenvolvedor de Software focado em performance e custo inteligente.',
  links: {
    github: 'https://github.com/rafaelcsilvadev',
    linkedin: 'https://www.linkedin.com/in/rafa-couto',
  },
} as const

export type SiteConfig = typeof siteConfig
