import React from 'react'
import {
  Badge,
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Skeleton,
  Spacer,
  Text,
} from '@chakra-ui/react'

export type ChurchDetailCardPropsType = {
  heading: string
  loading?: boolean
  detail?: string
  onClick?: () => void
  vacationCount?: string
  vacationIcBacentaCount?: string
}

const ChurchDetailCard = (props: ChurchDetailCardPropsType) => {
  const loading = !props.heading || props.loading || !props.detail

  return (
    <Card onClick={props.onClick} data-testid="card">
      <CardHeader padding={2} paddingBottom={0}>
        <Skeleton isLoaded={!loading} height={4}>
          <Text as="span" color="grey" fontSize="xs">
            {props.heading}
          </Text>
        </Skeleton>
      </CardHeader>
      <CardBody padding={1} paddingX={2}>
        <Skeleton isLoaded={!loading} data-testid="skeleton-loader">
          <Flex>
            <Text as="span" fontSize="xl" fontWeight="bold">
              {props.detail}
            </Text>
            <Spacer />
            <Box as="span" marginLeft={2}>
              {props?.vacationCount !== '0' && (
                <Badge colorScheme="red" fontSize="0.6em" data-testid="badge">
                  <span className="font-danger">{`+ `}</span>
                  {`${props?.vacationCount} on Vacation`}
                </Badge>
              )}
            </Box>
          </Flex>
        </Skeleton>
      </CardBody>
    </Card>
  )
}

export default ChurchDetailCard
