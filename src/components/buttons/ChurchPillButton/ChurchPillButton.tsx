import React from 'react'
import { Button, Skeleton } from '@chakra-ui/react'

export type ChurchPillButtonProps = {
  church: {
    id: string
    name: string
    __typename: string
  }
  onClick: () => void
}

const ChurchPillButton = (props: ChurchPillButtonProps) => {
  const { church, onClick } = props

  if (!church?.name) {
    return (
      <Button
        borderRadius="25px"
        width={20}
        colorScheme="gray"
        onClick={onClick}
      >
        <Skeleton borderRadius="25px" isLoaded={church?.name != null} />
      </Button>
    )
  }

  return (
    <Button borderRadius="25px" colorScheme="gray" onClick={onClick}>
      {church.name}
    </Button>
  )
}

export default ChurchPillButton
