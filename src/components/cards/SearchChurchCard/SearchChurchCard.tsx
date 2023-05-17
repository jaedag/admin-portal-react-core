import React from 'react'
import { Avatar, Box, Card, CardBody, Flex, Text } from '@chakra-ui/react'
import { getCloudinaryPreset } from '@/utils'
import { Church } from '@/types'

export interface SearchChurchCardPropsInterface {
  church: Church
  onClick?: () => void
}

const SearchChurchCard = (props: SearchChurchCardPropsInterface) => {
  const { church, onClick } = props

  return (
    <Card
      data-testid="search-member-card"
      direction="row"
      marginY={2}
      onClick={onClick}
    >
      <CardBody>
        <Flex gap="5" alignContent="center" alignItems="center">
          <Avatar
            data-testid="avatar"
            name={church.name + ' ' + church.levelName}
            size="lg"
            src={getCloudinaryPreset(church.leader.pictureUrl)}
          />
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
