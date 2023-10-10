import React from 'react'
import {
  Avatar,
  Box,
  HStack,
  SkeletonCircle,
  SkeletonText,
  Text,
} from '@chakra-ui/react'
import { Member } from '@jaedag/admin-portal-types'
import { getCloudinaryPreset } from '@/utils'

export type AvatarWithNamePropsType = {
  member: Member
  loading: boolean
  onClick: () => void
}

const AvatarWithName = (props: AvatarWithNamePropsType) => {
  const { member, onClick, loading } = props

  if (loading || !member) {
    return (
      <HStack marginTop={4}>
        <Box marginRight={3}>
          <SkeletonCircle data-testid="skeleton-circle" size="10" />
        </Box>
        <SkeletonText
          data-testid="skeleton-text"
          noOfLines={1}
          spacing="4"
          skeletonHeight="4"
          width="100%"
        />
      </HStack>
    )
  }

  return (
    <HStack marginTop={4} onClick={onClick} data-testid="container">
      <Avatar
        data-testid="avatar"
        src={getCloudinaryPreset(member?.pictureUrl ?? '')}
        name={member.fullName}
        size="sm"
        marginRight={2}
      />

      <Box alignItems="center">
        <Text fontSize="sm" marginBottom={0}>
          {member?.nameWithTitle ??
            member.fullName ??
            member.firstName + ' ' + member.lastName}
        </Text>
      </Box>
    </HStack>
  )
}

export default AvatarWithName
