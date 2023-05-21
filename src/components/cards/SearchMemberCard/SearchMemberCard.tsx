import React from 'react'
import { Avatar, Box, Card, CardBody, Flex, Text } from '@chakra-ui/react'
import { Member } from '@/types'
import { getCloudinaryPreset } from '@/utils'

export interface SearchMemberCardPropsInterface {
  member: Member
  onClick?: () => void
}

const SearchMemberCard = (props: SearchMemberCardPropsInterface) => {
  const { member, onClick } = props

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
            name={member.firstName + ' ' + member.lastName}
            size="lg"
            src={getCloudinaryPreset(member.pictureUrl)}
          />
          <Box>
            <Text marginBottom={0} fontWeight="bold" fontSize="lg">
              {member.firstName + ' ' + member.lastName}
            </Text>

            {!!member.fellowship && (
              <Text color="gray.200" marginTop={0}>
                {member.fellowship.name}
              </Text>
            )}
            {!!member.ministry && (
              <Text color="green.200" marginTop={0}>
                {member.ministry.name}
              </Text>
            )}
          </Box>
        </Flex>
      </CardBody>
    </Card>
  )
}

export default SearchMemberCard
