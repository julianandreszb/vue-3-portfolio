import type { IBadge } from '@/TypescriptDefinitions/IBadge'

interface IBlogCard {
  image: {
    src: string
    alt: string
  }
  heading: string
  company: string
  date: Date
  description: string
  badges: Array<IBadge>
}

export type { IBlogCard }
