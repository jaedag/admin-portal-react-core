import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Container,
  Heading,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import React from 'react'
export interface ApolloError {
  name: string
  graphQLErrors: any[]
  protocolErrors: any[]
  clientErrors: any[]
  networkError: {
    name: string
    response: any
    statusCode: number
    result: {
      errors: {
        message: string
        extensions: {
          code: string
          exception: {
            stacktrace: string[]
          }
        }
      }[]
    }
  }
  message: string
}

interface ErrorScreenProps {
  error: ApolloError
  throwToSentry: () => void
}

const ErrorPage = ({ error, throwToSentry }: ErrorScreenProps) => {
  if (error) {
    throwToSentry()
  }

  const { isOpen, onClose, onOpen } = useDisclosure()

  const { graphQLErrors, networkError } = error

  // if (graphQLErrors)
  //   graphQLErrors.forEach(({ message, locations, path }) =>
  //     console.error(
  //       `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
  //     )
  //   )
  // if (networkError) console.error(`[Network error]: ${networkError}`)

  return (
    <Center height="100vh">
      <Container textAlign="center">
        <Text marginBottom={6}>There seems to be an error loading data</Text>
        <Card align="center">
          <CardHeader paddingY={4}>
            <Heading size="md">{error.name}</Heading>
          </CardHeader>
          <CardBody padding={2}>
            <Text>{error.message}</Text>
            <>
              {graphQLErrors?.length &&
                graphQLErrors.forEach(({ message, locations, path }) => (
                  <Text>
                    {`[GraphQL error]: Message: ${message}, Location: ${locations},
                Path: ${path}`}
                  </Text>
                ))}
            </>
            {networkError && (
              <>
                {networkError.result.errors.map((error) => (
                  <>
                    <Text>{`code: ${error.extensions.code}`}</Text>
                    <Text>{`[Network error]: ${error.message}`}</Text>
                  </>
                ))}
              </>
            )}
            <Modal
              isOpen={isOpen}
              onClose={onClose}
              scrollBehavior="inside"
              isCentered
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>{error.name}</ModalHeader>
                <ModalBody>
                  <Text fontSize="small" color="blue.100">
                    {error?.stack}
                  </Text>
                </ModalBody>
                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </CardBody>

          <CardFooter>
            <Container>
              <Text fontSize="small" fontWeight="bold" paddingBottom={5}>
                Click the{' '}
                <Text as="span" color="red.400">
                  Show Details
                </Text>{' '}
                Button and send a screenshot to provide more details to the
                support team
              </Text>
              <Button colorScheme="red" onClick={() => onOpen()}>
                Show Details
              </Button>
            </Container>
          </CardFooter>
        </Card>

        <Button
          size="lg"
          marginTop={10}
          colorScheme="facebook"
          onClick={() => window.location.reload()}
        >
          Reload Page
        </Button>
      </Container>
    </Center>
  )
}

export default ErrorPage
