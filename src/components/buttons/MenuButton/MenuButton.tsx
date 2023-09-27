import React from 'react'
import { Box, Button, Icon, Text, ButtonProps } from '@chakra-ui/react'
import { IconType } from 'react-icons'
import { capitalise } from '@/utils'

type MenuButtonProps = {
  icon: IconType
  color: string
  title: string
  onClick: () => void
  subtitle?: string
} & ButtonProps

const MenuButton: React.FC<MenuButtonProps> = ({
  icon,
  color,
  title,
  subtitle,
  onClick,
  ...rest
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
      {...rest}
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
