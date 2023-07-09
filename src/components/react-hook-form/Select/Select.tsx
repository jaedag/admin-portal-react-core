import React from 'react'
import {
  FormLabel,
  FormControl,
  FormErrorMessage,
  Select as ChakraSelect,
  SelectProps as ChakraSelectProps,
} from '@chakra-ui/react'
import {
  ReactHookFormComponentProps,
  SelectOptions,
} from '../react-hook-form-types'
import { Controller } from 'react-hook-form'

export interface RHFSelectProps extends ReactHookFormComponentProps {
  defaultOption?: string
  options: SelectOptions
}
type SelectPropsType = RHFSelectProps & ChakraSelectProps

const Select = (props: SelectPropsType) => {
  const { label, name, options, defaultOption, control, errors, ...rest } =
    props

  return (
    <FormControl isInvalid={!!errors[name]} marginBottom={2}>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <ChakraSelect
            id={name}
            placeholder={defaultOption}
            {...field}
            {...rest}
          >
            {options?.map((option) => {
              return (
                <option key={option.value} value={option.value}>
                  {option.key}
                </option>
              )
            })}
          </ChakraSelect>
        )}
      />
      <FormErrorMessage>{errors[name]?.message as string}</FormErrorMessage>
    </FormControl>
  )
}

export default Select
