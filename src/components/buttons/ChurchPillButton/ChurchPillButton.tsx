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
    <Button borderRadius="25px" colorScheme="gray" onClick={onClick}>
      <Skeleton
        borderRadius="25px"
        width="50px"
        isLoaded={church?.name != null}
      >
        {church.name}
      </Skeleton>
    </Button>
  )
}

export default ChurchPillButton
