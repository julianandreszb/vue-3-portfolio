import { AlertColor } from '@/typescriptDefinitions/enums/AlertColor'

interface IAlert {
  title: string
  message: string
  color: AlertColor
}

export type { IAlert }
