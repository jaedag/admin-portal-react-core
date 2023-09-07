import React from 'react'
import { Button, Card, Text, VStack } from '@chakra-ui/react'
import { capitalise } from '@/utils'

interface NumberButtonProps {
  number?: number
  color: string
  title: string
  onClick: () => void
  subtitle?: string
}

const NumberButton: React.FC<NumberButtonProps> = ({
  number,
  color,
  title,
  subtitle,
  onClick,
}) => (
  <Button
    width="100%"
    paddingY="40px"
    marginBottom="10px"
    size="lg"
    colorScheme="gray"
    boxShadow="md"
    justifyContent="flex-start"
    onClick={onClick}
    overflow="clip"
    leftIcon={
      <Card padding={2} opacity={0.8} boxShadow="sm">
        <Text>{number ?? 0}</Text>
      </Card>
    }
  >
    <VStack align="flex-start">
      <Text fontSize="1xl" marginBottom={0} color={color}>
        {capitalise(title)}
      </Text>
      <Text fontSize="xs" fontWeight="normal">
        {subtitle}
      </Text>
    </VStack>
  </Button>
)

NumberButton.defaultProps = {
  subtitle: '',
}

export default NumberButton
