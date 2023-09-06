import React from 'react'
import {
  FormLabel,
  Textarea as ChakraTextarea,
  FormControl,
  FormErrorMessage,
  TextareaProps as ChakraTextareaProps,
} from '@chakra-ui/react'
import { ReactHookFormComponentProps } from '../react-hook-form-types'
import { Controller } from 'react-hook-form'

type TextareaPropsType = ReactHookFormComponentProps & ChakraTextareaProps

const Textarea = (props: TextareaPropsType) => {
  const { label, name, control, errors, ...rest } = props

  return (
    <FormControl isInvalid={!!errors[name]}>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <ChakraTextarea id={name} {...field} {...rest} />
        )}
      />
      <FormErrorMessage>{errors[name]?.message as string}</FormErrorMessage>
    </FormControl>
  )
}

export default Textarea
