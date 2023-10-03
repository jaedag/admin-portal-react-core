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
import { Church } from '@jaedag/admin-portal-types'
import FellowshipIcon from '@/components/icons/FellowshipIcon'
import BacentaIcon from '@/components/icons/BacentaIcon'
import ConstituencyIcon from '@/components/icons/ConstituencyIcon'
import CouncilIcon from '@/components/icons/CouncilIcon'
import StreamIcon from '@/components/icons/StreamIcon'
import CamupusIcon from '@/components/icons/CampusIcon'
import OversightIcon from '@/components/icons/OversightIcon'

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
        <FellowshipIcon />
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
        <BacentaIcon />
      </AvatarBadge>
    )
  }

  if (church.__typename === 'Constituency') {
    return (
      <AvatarBadge
        borderColor="yellow.200"
        bg="yellow.600"
        boxSize="1.25em"
        padding={1}
      >
        <ConstituencyIcon />
      </AvatarBadge>
    )
  }

  if (church.__typename === 'Council') {
    return (
      <AvatarBadge
        borderColor="purple.200"
        bg="purple.600"
        boxSize="1.25em"
        padding={1}
      >
        <CouncilIcon />
      </AvatarBadge>
    )
  }

  if (church.__typename === 'Stream') {
    return (
      <AvatarBadge
        borderColor="pink.200"
        bg="pink.600"
        boxSize="1.25em"
        padding={1}
      >
        <StreamIcon />
      </AvatarBadge>
    )
  }

  if (church.__typename === 'Campus') {
    return (
      <AvatarBadge
        borderColor="green.200"
        bg="green.600"
        boxSize="1.25em"
        padding={1}
      >
        <CamupusIcon />
      </AvatarBadge>
    )
  }

  if (church.__typename === 'Oversight') {
    return (
      <AvatarBadge
        borderColor="cyan.200"
        bg="cyan.600"
        boxSize="1.25em"
        padding={1}
      >
        <OversightIcon />
      </AvatarBadge>
    )
  }

  return <AvatarBadge boxSize="1.25em" bg="white" />
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
            src={getCloudinaryPreset(church.leader?.pictureUrl)}
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
