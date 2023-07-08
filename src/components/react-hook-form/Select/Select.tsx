import React from 'react'
import { Field, FieldProps } from 'formik'
import {
  FormLabel,
  FormControl,
  FormErrorMessage,
  Select as ChakraSelect,
  SelectProps as ChakraSelectProps,
} from '@chakra-ui/react'
import { FormikComponentProps } from '../react-hook-form-types'

export interface FormikSelectProps extends FormikComponentProps {
  defaultOption?: string
  options: { key: string; value: string }[]
}
type SelectPropsType = FormikSelectProps & ChakraSelectProps

const Select = (props: SelectPropsType) => {
  const { label, name, options, defaultOption, ...rest } = props

  return (
    <Field id={name} name={name}>
      {({ field, form, meta }: FieldProps) => (
        <FormControl isInvalid={!!meta.error} marginBottom={2}>
          {label ? <FormLabel htmlFor={name}>{label}</FormLabel> : null}
          <ChakraSelect placeholder={defaultOption} {...field} {...rest}>
            {options?.map((option) => {
              return (
                <option key={option.value} value={option.value}>
                  {option.key}
                </option>
              )
            })}
          </ChakraSelect>
          <FormErrorMessage>{meta.error}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  )
}

export default Select
