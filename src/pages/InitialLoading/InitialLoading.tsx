import React from 'react'
import { Center, Container, Text, VStack } from '@chakra-ui/react'
import { PropagateLoader } from 'react-spinners'

const InitialLoading = ({ text }: { text?: string }) => {
  return (
    <Center height="100vh">
      <VStack>
        <PropagateLoader
          data-testid="spinner"
          speedMultiplier={0.8}
          color="grey"
        />
        <Container paddingTop={10}>
          <Text>{text || 'Please wait while we log you in'}</Text>
        </Container>
      </VStack>
    </Center>
  )
}

export default InitialLoading
