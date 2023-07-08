/* eslint-disable @typescript-eslint/no-explicit-any */
import { Control, FieldErrors } from 'react-hook-form'

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

export interface ReactHookFormComponentProps {
  label?: string
  name: string
  placeholder?: string
  options?: { key: string; value: string }[]
  control: Control<any>
  errors: FieldErrors<any>
  size?: 'sm' | 'md' | 'lg'
}
