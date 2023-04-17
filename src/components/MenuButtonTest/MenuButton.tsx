import React from 'react'
import { Button, Icon, Text, VStack } from '@chakra-ui/react'
import { IconType } from 'react-icons'
import { capitalise } from '../../utils/helper-functions'
import './MenuButton.css'

interface MenuButtonProps {
  color: string
  title: string
  subtitle?: string
}

const MenuButton: React.FC<MenuButtonProps> = ({ color, title, subtitle }) => {
  return (
    <Button
      width={`100%`}
      paddingY="40px"
      marginBottom="10px"
      size="lg"
      colorScheme="gray"
      boxShadow="md"
      justifyContent={`flex-start`}
      overflow="clip"
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
}

export default MenuButton
