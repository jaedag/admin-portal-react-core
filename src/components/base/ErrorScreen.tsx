import { Button, Center, Text } from '@chakra-ui/react'

const ErrorScreen = ({ error }: { error?: Error }) => {
  if (error) {
    // throwToSentry('', error)
  }

  return (
    <Center height="100vh">
      <Text as="p" className="text-center full-center">
        There seems to be an error loading data
      </Text>
      <Button onClick={() => window.location.reload()}>Reload Page</Button>
    </Center>
  )
}

export default ErrorScreen
