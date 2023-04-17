import { Container } from '@chakra-ui/react'

const PageComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container marginTop="70px" height="100%">
      {children}
    </Container>
  )
}

export default PageComponent
