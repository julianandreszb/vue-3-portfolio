import type { ISkill } from '@/typescriptDefinitions/ISkill'

interface IAchievementCard {
  id: number
  icon: {
    src: string
    alt: string
  }
  heading: string
  certificationProvider: string
  date: string
  certificateLink: string
  skills: Array<ISkill>
}

export type { IAchievementCard }
