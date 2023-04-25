import React from 'react'
import { Button } from '@chakra-ui/react'

const ViewAll = ({ onClick }: { onClick: () => void }) => {
  return (
    <Button size="sm" colorScheme="gray" onClick={onClick}>
      View All
    </Button>
  )
}

export default ViewAll
