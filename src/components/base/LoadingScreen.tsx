import { Center, Spinner } from '@chakra-ui/react'
import React from 'react'

const LoadingScreen = () => {
  return (
    <Center height="100vh">
      <Spinner size="xl" />
    </Center>
  )
}

export default LoadingScreen
