import React from 'react'
import {
  FormLabel,
  Switch as ChakraSwitch,
  FormControl,
  FormErrorMessage,
  SwitchProps as ChakraSwitchProps,
} from '@chakra-ui/react'
import { ReactHookFormComponentProps } from '../react-hook-form-types'
import { Controller } from 'react-hook-form'

type SwitchPropsType = ReactHookFormComponentProps & ChakraSwitchProps

const Switch = (props: SwitchPropsType) => {
  const { label, name, control, errors, ...rest } = props

  return (
    <FormControl display="flex" alignItems="center" isInvalid={!!errors[name]}>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <Controller
        name={name}
        control={control}
        render={({ field }) => <ChakraSwitch id={name} {...field} {...rest} />}
      />
      <FormErrorMessage>{errors[name]?.message as string}</FormErrorMessage>
    </FormControl>
  )
}

export default Switch
