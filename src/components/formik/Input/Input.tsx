import React from 'react'
import { Field, FieldProps } from 'formik'
import {
  FormLabel,
  Input as ChakraInput,
  FormControl,
  FormErrorMessage,
} from '@chakra-ui/react'
import { FormikComponentProps } from '../formik-types'

export interface InputProps extends FormikComponentProps {
  type?:
    | 'date'
    | 'time'
    | 'password'
    | 'color'
    | 'email'
    | 'number'
    | 'search'
    | 'tel'
    | 'text'
    | 'url'
}

const Input = (props: InputProps) => {
  const { label, name, ...rest } = props

  return (
    <Field id={name} name={name}>
      {({ field, form, meta }: FieldProps) => (
        <FormControl isInvalid={!!meta.error} marginBottom={2}>
          {label ? <FormLabel htmlFor={name}>{label}</FormLabel> : null}
          <ChakraInput {...field} {...rest} />
          <FormErrorMessage data-testid="error">{meta.error}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  )
}

export default Input
