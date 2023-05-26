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

export type MemberDetailsWithAvatarPropsType = {
  leader: Member
  title: string
  loading: boolean
  onClick: () => void
}

const MemberDetailsWithAvatar = (props: MemberDetailsWithAvatarPropsType) => {
  const { leader, title, onClick, loading } = props

  if (loading || !leader) {
    return (
      <HStack marginTop={4}>
        <Box marginRight={3}>
          <SkeletonCircle data-testid="skeleton-circle" size="20" />
        </Box>
        <SkeletonText
          data-testid="skeleton-text"
          noOfLines={2}
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
        size="lg"
        marginRight={3}
      />

      <Box alignItems="center">
        <Text as="span" fontSize="sm" color="grey" marginBottom={0}>
          {title}
        </Text>
        <Text fontWeight="bold" fontSize="lg" marginBottom={0}>
          {leader?.nameWithTitle ?? leader.fullName}
        </Text>
      </Box>
    </HStack>
  )
}

export default MemberDetailsWithAvatar
