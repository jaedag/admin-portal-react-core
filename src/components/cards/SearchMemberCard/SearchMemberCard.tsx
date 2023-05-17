import React from 'react'
import { Avatar, Box, Card, CardBody, Flex, Text } from '@chakra-ui/react'
import { Member } from '@/types'
import { getCloudinaryPreset } from '@/utils'

export interface SearchMemberCardPropsInterface {
  member: Member
}

const SearchMemberCard = (props: SearchMemberCardPropsInterface) => {
  const { member } = props

  return (
    <Card direction="row" marginY={2}>
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

            {!!member.ministry && (
              <Text color="grey" marginTop={0}>
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
