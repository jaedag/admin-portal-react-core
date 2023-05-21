import { Button } from '@chakra-ui/react'
import { FormikProps } from 'formik'
import React, { ReactNode } from 'react'

export type SubmitButtonProps = {
  formik: FormikProps<unknown>
  children?: ReactNode
}

const SubmitButton = (props: SubmitButtonProps) => {
  const { formik, ...rest } = props

  return (
    <Button
      colorScheme="green"
      type="submit"
      isLoading={formik.isSubmitting}
      {...rest}
    >
      {props.children || 'Submit'}
    </Button>
  )
}

export default SubmitButton
