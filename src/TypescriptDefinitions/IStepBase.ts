import type { ISkill } from '@/TypescriptDefinitions/ISkill'

interface IStepBase {
  id: number
  company: string
  description: string
  employmentDate: string
  employmentForm: string
  heading: string
  skills: Array<ISkill>
}
export type { IStepBase }
