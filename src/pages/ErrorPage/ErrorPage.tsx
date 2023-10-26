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
import { FirebaseError, isServerError, parseApolloError } from './error-utils'
import { ApolloError, ServerError } from '@apollo/client'

interface ErrorScreenProps {
  error: ApolloError | Error | undefined | FirebaseError
  throwToSentry: () => void
}

const ErrorPage = ({ error, throwToSentry }: ErrorScreenProps) => {
  if (error) {
    throwToSentry()
  }

  const { isOpen, onClose, onOpen } = useDisclosure()

  const { graphQLErrors, networkError } = error as ApolloError

  const parsedError = parseApolloError(error as ApolloError)

  const serverError = isServerError(networkError as ServerError)
    ? (networkError as ServerError)
    : null

  if (Array.isArray(parsedError) && parsedError.length) {
    // eslint-disable-next-line no-console
    console.error(parsedError.join('\n'))
  }
  // eslint-disable-next-line no-console
  else console.error(error)

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
                {!!serverError && typeof serverError.result !== 'string' && (
                  <>
                    {serverError.result?.errors?.map(
                      (error: {
                        extensions: { code: string }
                        message: string
                      }) => (
                        <>
                          <Text
                            fontWeight="bold"
                            color="red.400"
                          >{`code: ${error.extensions.code}`}</Text>
                          <Text noOfLines={3}>
                            {`[Network error]: ${error?.message}`}
                          </Text>
                        </>
                      )
                    )}
                    {!serverError.result?.errors?.length && (
                      <>
                        <Text
                          fontWeight="bold"
                          color="red.400"
                        >{`code: ${serverError?.statusCode}`}</Text>
                        <Text noOfLines={3}>
                          {`[Network error]: ${JSON.stringify(
                            serverError?.result
                          )}`}
                        </Text>
                      </>
                    )}
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
