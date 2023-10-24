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

export interface GraphQLError {
  message: string
  locations: {
    line: number
    column: number
  }[]
  path: (string | number)[]
  extensions: {
    code: string
    exception: {
      message: string
      stacktrace: string[]
    }
  }
}

export interface ApolloError {
  name: string
  graphQLErrors: GraphQLError[]
  protocolErrors: unknown[]
  clientErrors: unknown[]
  networkError: {
    name: string
    response: unknown
    statusCode: number
    result: {
      errorMessage?: string
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
  } | null
  message: string
}

export interface FirebaseError {
  code: string
  message: string
  name: string
  stack: string
}

interface ErrorScreenProps {
  error: ApolloError | Error | undefined | FirebaseError
  throwToSentry: () => void
}

export const parseApolloGQLError = (errors: GraphQLError[]) => {
  const errorArray = errors
    .map(
      ({ message, locations, path }) =>
        `Message: ${message}, Location: ${JSON.stringify(
          locations
        )}, Path: ${JSON.stringify(path)}`
    )
    .join(' \n')

  return errorArray
}
const ErrorPage = ({ error, throwToSentry }: ErrorScreenProps) => {
  if (error) {
    throwToSentry()
  }

  const { isOpen, onClose, onOpen } = useDisclosure()

  const { graphQLErrors, networkError } = error as ApolloError

  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      // eslint-disable-next-line no-console
      console.error(
        `[GraphQL error]: Message: ${message}, Location: ${JSON.stringify(
          locations
        )}, Path: ${JSON.stringify(path)}`
      )
    )

  if (networkError)
    // eslint-disable-next-line no-console
    console.error(`[Network error]: ${JSON.stringify(networkError)}`)

  return (
    <Center height="100vh">
      <Container textAlign="center">
        <Text marginBottom={6}>There seems to be an error loading data</Text>
        <Card align="center">
          <CardHeader paddingY={4}>
            <Heading size="md">{error?.name}</Heading>
          </CardHeader>
          <CardBody padding={2}>
            {graphQLErrors?.length > 0 && (
              <>
                {graphQLErrors.map(
                  ({ message, locations, path, extensions }) => (
                    <>
                      <Text
                        fontWeight="bold"
                        color="red.400"
                      >{`code: ${extensions.code}`}</Text>
                      <Text>{`Location: ${JSON.stringify(locations)}`}</Text>
                      <Text marginBottom={3}>{`Path: ${JSON.stringify(
                        path
                      )}`}</Text>
                      <Text
                        noOfLines={3}
                      >{`[GraphQL error]: Message: ${message}`}</Text>
                    </>
                  )
                )}
              </>
            )}

            {!!networkError && (
              <>
                {networkError.result?.errors?.map((error) => (
                  <>
                    <Text
                      fontWeight="bold"
                      color="red.400"
                    >{`code: ${error.extensions.code}`}</Text>
                    <Text noOfLines={3}>
                      {`[Network error]: ${error?.message}`}
                    </Text>
                  </>
                ))}
                {!networkError.result?.errors?.length && (
                  <>
                    <Text
                      fontWeight="bold"
                      color="red.400"
                    >{`code: ${networkError?.statusCode}`}</Text>
                    <Text noOfLines={3}>
                      {`[Network error]: ${networkError?.result?.errorMessage}`}
                    </Text>
                  </>
                )}
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
                <ModalHeader>{error?.name}</ModalHeader>
                <ModalBody>
                  <Text fontSize="small" color="blue.100">
                    {JSON.stringify(error)}
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
