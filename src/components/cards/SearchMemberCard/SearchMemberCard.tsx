import React from 'react'
import {
  Avatar,
  Box,
  Card,
  CardBody,
  Flex,
  Text,
  useColorMode,
} from '@chakra-ui/react'
import { Member } from '@jaedag/admin-portal-types'
import { getCloudinaryPreset } from '@/utils'

export interface SearchMemberCardPropsInterface {
  member: Member
  onClick?: () => void
}

const SearchMemberCard = (props: SearchMemberCardPropsInterface) => {
  const { member, onClick } = props
  const { colorMode } = useColorMode()

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
              <Text
                color={colorMode === 'light' ? 'gray.400' : 'gray.300'}
                marginBottom={0}
              >
                {member.fellowship.levelName + ': ' + member.fellowship.name}
              </Text>
            )}
            {!!member.ministry && (
              <Text
                color={colorMode === 'light' ? 'green.400' : 'green.200'}
                marginBottom={0}
              >
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
