import React from 'react'
import { Center, Container, Spinner, Text, VStack } from '@chakra-ui/react'

const InitialLoading = ({ text }: { text?: string }) => {
  return (
    <Center height="100vh">
      <VStack>
        <Spinner
          data-testid="spinner"
          size="xl"
          thickness="3px"
          speed="0.80s"
        />
        <Container paddingTop={10}>
          <Text>{text || 'Please wait while we log you in'}</Text>
        </Container>
      </VStack>
    </Center>
  )
}

export default InitialLoading
