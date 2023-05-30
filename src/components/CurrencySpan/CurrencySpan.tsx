import { Text, TextProps } from '@chakra-ui/react'
import React from 'react'

export type CurrencySpanProps = {
  number: number | null
} & Omit<TextProps, 'fontSize'>

const CurrencySpan = ({ number, ...rest }: CurrencySpanProps) => {
  if (number === null || (number !== null && number < 0)) {
    return <></>
  }

  return (
    <>
      <Text as="span" {...rest}>
        {number}{' '}
      </Text>
      <Text as="span" fontSize="small" {...rest}>
        GHS
      </Text>
    </>
  )
}

export default CurrencySpan
