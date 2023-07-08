import React from 'react'
import {
  FormLabel,
  Input as ChakraInput,
  FormControl,
  FormErrorMessage,
  InputProps as ChakraInputProps,
} from '@chakra-ui/react'
import { ReactHookFormComponentProps } from '../react-hook-form-types'
import { Controller } from 'react-hook-form'

export interface InputProps extends ReactHookFormComponentProps {
  type?:
    | 'date'
    | 'time'
    | 'datetime-local'
    | 'password'
    | 'color'
    | 'email'
    | 'number'
    | 'search'
    | 'tel'
    | 'text'
    | 'url'
}
type InputPropsType = InputProps & Omit<ChakraInputProps, 'type'>

const Input = (props: InputPropsType) => {
  const { label, name, control, errors, ...rest } = props

  return (
    <FormControl isInvalid={!!errors[name]}>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <ChakraInput id={name} placeholder={label} {...field} {...rest} />
        )}
      />
      <FormErrorMessage>{errors[name]?.message as string}</FormErrorMessage>
    </FormControl>
  )
}

export default Input
