import { Center, Spinner } from '@chakra-ui/react'
import React from 'react'

const LoadingPage = () => {
  return (
    <Center height="100vh">
      <Spinner data-testid="spinner" size="xl" />
    </Center>
  )
}

export default LoadingPage
