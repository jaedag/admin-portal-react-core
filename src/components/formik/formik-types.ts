export interface FormikComponentProps {
  label?: string
  name: string
  className?: string
  placeholder?: string
  options?: { key: string; value: string }[]
  error?: string
}
