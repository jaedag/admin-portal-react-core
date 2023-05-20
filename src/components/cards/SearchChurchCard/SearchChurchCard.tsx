import React from 'react'
import {
  Avatar,
  AvatarBadge,
  Box,
  Card,
  CardBody,
  Flex,
  Text,
} from '@chakra-ui/react'
import { getCloudinaryPreset } from '@/utils'
import { Church } from '@/types'
import { BsPeopleFill } from 'react-icons/bs'
import { FaBus } from 'react-icons/fa'

export interface SearchChurchCardPropsInterface {
  church: Church
  onClick?: () => void
}

const SearchIconBadge = ({ church }: { church: Church }) => {
  if (church.__typename === 'Fellowship') {
    return (
      <AvatarBadge
        borderColor="papayawhip"
        bg="tomato"
        boxSize="1.25em"
        padding={1}
      >
        <BsPeopleFill color="white" />
      </AvatarBadge>
    )
  }

  if (church.__typename === 'Bacenta') {
    return (
      <AvatarBadge
        borderColor="blue.200"
        bg="blue.600"
        boxSize="1.25em"
        padding={1}
      >
        <FaBus color="white" />
      </AvatarBadge>
    )
  }

  return <div>SearchIconBadge</div>
}

const SearchChurchCard = (props: SearchChurchCardPropsInterface) => {
  const { church, onClick } = props

  return (
    <Card
      data-testid="search-church-card"
      direction="row"
      marginY={2}
      onClick={onClick}
    >
      <CardBody>
        <Flex gap="5" alignContent="center" alignItems="center">
          <Avatar
            data-testid="avatar"
            borderRadius={10}
            name={church.name + ' ' + church.levelName}
            size="lg"
            src={getCloudinaryPreset(church.leader.pictureUrl)}
          >
            <SearchIconBadge church={church} />
          </Avatar>
          <Box>
            <Text marginBottom={0} fontWeight="bold" fontSize="lg">
              {church.name + ' ' + church.levelName}
            </Text>

            {!!church.leader && (
              <Text color="grey" marginTop={0}>
                {church.leader.nameWithTitle}
              </Text>
            )}
          </Box>
        </Flex>
      </CardBody>
    </Card>
  )
}

export default SearchChurchCard
