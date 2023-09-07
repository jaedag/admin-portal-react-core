import React from 'react'
import { Button, ButtonProps, Card, Text } from '@chakra-ui/react'
import { capitalise } from '@/utils'

interface NumberButtonPropsInterface {
  number?: number
  color?: string
  title: string
  onClick: () => void
}

type NumberButtonProps = NumberButtonPropsInterface & ButtonProps

const NumberButton: React.FC<NumberButtonProps> = ({
  number,
  color,
  title,
  onClick,
  ...rest
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
      <Card padding={2} opacity={0.8} boxShadow="sm" color={color}>
        {number ?? 0}
      </Card>
    }
    {...rest}
  >
    <Text marginBottom={0} color={color}>
      {capitalise(title)}
    </Text>
  </Button>
)

export default NumberButton
