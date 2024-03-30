import type { ISkill } from '@/TypescriptDefinitions/ISkill'

interface IAchievementCard {
  id: number
  icon: {
    src: string
    alt: string
  }
  heading: string
  certificationProvider: string
  date: string
  certificateLink: 'https://www.example.com'
  skills: Array<ISkill>
}

export type { IAchievementCard }
