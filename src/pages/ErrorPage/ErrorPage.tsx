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

interface ErrorScreenProps {
  error: Error
  throwToSentry: () => void
}

const ErrorPage = ({ error, throwToSentry }: ErrorScreenProps) => {
  if (error) {
    throwToSentry()
  }

  const { isOpen, onClose, onOpen } = useDisclosure()

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
                    {error.stack}
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
