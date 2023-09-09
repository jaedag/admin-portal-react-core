import React from 'react'
import { Box, Button, Icon, Text } from '@chakra-ui/react'
import { IconType } from 'react-icons'
import { capitalise } from '@/utils'

interface MenuButtonProps {
  icon: IconType
  color: string
  title: string
  onClick: () => void
  subtitle?: string
}

const MenuButton: React.FC<MenuButtonProps> = ({
  icon,
  color,
  title,
  subtitle,
  onClick,
}) => {
  return (
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
        <Icon
          as={icon}
          w={10}
          h={10}
          color={color}
          margin="0px 20px 0 0px"
          verticalAlign="middle"
        />
      }
    >
      <Box>
        <Text fontSize="1xl" marginBottom={0} color={color}>
          {capitalise(title)}
        </Text>
        <Text fontSize="xs" fontWeight="normal">
          {subtitle}
        </Text>
      </Box>
    </Button>
  )
}

MenuButton.defaultProps = {
  subtitle: '',
}

export default MenuButton
