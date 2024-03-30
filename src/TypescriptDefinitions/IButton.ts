interface IButton {
  size: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  hierarchy: 'Primary' | 'Secondary gray' | 'Secondary color'
  state: 'Default' | 'Hover' | 'Focused' | 'Disabled'
  type: 'button' | 'submit' | 'reset'
}

export type { IButton }
