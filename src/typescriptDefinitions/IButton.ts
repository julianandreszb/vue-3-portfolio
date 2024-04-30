interface IButton {
  isLoading?: boolean
  size: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  hierarchy: 'Primary' | 'Secondary gray' | 'Secondary color' | 'Link gray'
  state: 'Default' | 'Hover' | 'Focused' | 'Disabled'
}

export type { IButton }
