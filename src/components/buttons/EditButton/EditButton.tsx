import React from 'react'
import { Button } from '@chakra-ui/react'
import { BsPencilSquare } from 'react-icons/bs'

const EditButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <Button
      size="sm"
      colorScheme="yellow"
      leftIcon={<BsPencilSquare />}
      onClick={onClick}
    >
      Edit
    </Button>
  )
}

export default EditButton
