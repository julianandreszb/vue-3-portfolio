import type { IBadge } from '@/typescriptDefinitions/IBadge'

interface IBlogCard {
  id: number
  image: {
    src: string
    alt: string
  }
  links: {
    github: string
    live: string
  }
  heading: string
  company: string
  date: Date
  description: string
  badges: Array<IBadge>
  featured?: boolean
}

export type { IBlogCard }
