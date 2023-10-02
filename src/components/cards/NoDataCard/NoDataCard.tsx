import { Card, CardBody, CardProps } from '@chakra-ui/react'
import React from 'react'

const NoDataCard = ({
  children,
  ...rest
}: { children?: React.ReactNode } & CardProps) => {
  return (
    <Card textAlign="center" {...rest}>
      <CardBody>{children ?? 'There is no data to show'}</CardBody>
    </Card>
  )
}

export default NoDataCard
