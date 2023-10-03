import { Button, ButtonProps } from '@chakra-ui/react'
import React from 'react'

export type SubmitButtonProps = {
  isSubmitting: boolean
} & Omit<ButtonProps, 'isLoading'>

const SubmitButton = ({ isSubmitting, ...rest }: SubmitButtonProps) => {
  return (
    <Button
      type="submit"
      isLoading={isSubmitting}
      colorScheme="whatsapp"
      paddingX={8}
      {...rest}
    >
      Submit Form
    </Button>
  )
}

export default SubmitButton
