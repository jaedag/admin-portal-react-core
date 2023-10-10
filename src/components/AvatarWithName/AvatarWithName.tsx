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
  leader: Member
  loading: boolean
  onClick: () => void
}

const AvatarWithName = (props: AvatarWithNamePropsType) => {
  const { leader, onClick, loading } = props

  if (loading || !leader) {
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
        src={getCloudinaryPreset(leader?.pictureUrl ?? '')}
        name={leader.fullName}
        size="sm"
        marginRight={2}
      />

      <Box alignItems="center">
        <Text fontSize="sm" marginBottom={0}>
          {leader?.nameWithTitle ??
            leader.fullName ??
            leader.firstName + ' ' + leader.lastName}
        </Text>
      </Box>
    </HStack>
  )
}

export default AvatarWithName
