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
import { ChurchLevelColor } from '@/assets/assets-utils'
import { ChurchLevelIcon } from '@/assets'

export interface SearchChurchCardPropsInterface {
  church: Church
  onClick?: () => void
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
            <AvatarBadge
              borderColor={ChurchLevelColor[church.__typename] + '.' + 200}
              bg={ChurchLevelColor[church.__typename] + '.' + 600}
              boxSize="1.25em"
              padding={1}
            >
              <ChurchLevelIcon level={church.__typename} />
            </AvatarBadge>
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
