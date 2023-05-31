export interface FormikComponentProps {
  label?: string
  name: string
  placeholder?: string
  options?: { key: string; value: string }[]
  error?: string
  size?: 'sm' | 'md' | 'lg'
}

export type FormikSelectOptions = {
  key: string
  value: string
}[]
