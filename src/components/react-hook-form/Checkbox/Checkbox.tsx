import React from 'react'
import {
  FormLabel,
  Checkbox as ChakraCheckbox,
  FormControl,
  FormErrorMessage,
  CheckboxProps as ChakraCheckboxProps,
} from '@chakra-ui/react'
import { ReactHookFormComponentProps } from '../react-hook-form-types'
import { Controller } from 'react-hook-form'

type CheckboxPropsType = ReactHookFormComponentProps & ChakraCheckboxProps

const Checkbox = (props: CheckboxPropsType) => {
  const { label, name, control, errors, ...rest } = props

  return (
    <FormControl isInvalid={!!errors[name]}>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <ChakraCheckbox id={name} {...field} {...rest} />
        )}
      />
      <FormErrorMessage>{errors[name]?.message as string}</FormErrorMessage>
    </FormControl>
  )
}

export default Checkbox
