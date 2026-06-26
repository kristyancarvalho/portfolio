export type StackCategory =
  | 'languages'
  | 'frontend'
  | 'backend'
  | 'data'
  | 'devops'
  | 'tooling'
  | 'mobile'

export type StackItem = {
  id: string
  name: string
  category: StackCategory
  icon?: string
  featured?: boolean
}
