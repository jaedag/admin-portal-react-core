import React from 'react'
import { Card, CardBody, CardHeader, Skeleton, Text } from '@chakra-ui/react'

export type MemberDetailCardPropsType = {
  heading: string
  loading?: boolean
  detail?: string
  onClick?: () => void
}

const MemberDetailCard = (props: MemberDetailCardPropsType) => {
  const loading = !props.heading || props.loading || !props.detail

  return (
    <Card onClick={props.onClick} data-testid="card">
      <CardHeader padding={2} paddingY={1}>
        <Skeleton isLoaded={!loading} height={4}>
          <Text as="span" color="grey" fontSize="xs">
            {props.heading}
          </Text>
        </Skeleton>
      </CardHeader>
      <CardBody padding={2}>
        <Skeleton isLoaded={!loading} height={6} data-testid="skeleton-loader">
          <Text as="span" fontSize="xl" fontWeight="bold">
            {props.detail}
          </Text>
        </Skeleton>
      </CardBody>
    </Card>
  )
}

export default MemberDetailCard
