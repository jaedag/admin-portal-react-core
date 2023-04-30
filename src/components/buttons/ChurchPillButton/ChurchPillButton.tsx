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

  return (
    <Skeleton borderRadius="25px" isLoaded={church?.name != null}>
      <Button borderRadius="25px" colorScheme="gray" onClick={onClick}>
        {church.name}
      </Button>
    </Skeleton>
  )
}

export default ChurchPillButton
