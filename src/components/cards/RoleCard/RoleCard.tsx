import React from 'react'
import { Role } from '@jaedag/admin-portal-types'
import { Card, CardFooter, CardHeader, Heading, Text } from '@chakra-ui/react'

type RoleCardProps = {
  number: number | string
  role: Role
}

const RoleCard: React.FC<RoleCardProps> = ({ number, role }: RoleCardProps) => {
  let color = ''

  switch (true) {
    case role.toLowerCase().includes('fellowship'):
      color = 'linear-gradient(to bottom, #38760b, #173d07, #082b07)'
      break
    case role.toLowerCase().includes('bacenta'):
    case role.toLowerCase().includes('sonta'):
      color = 'linear-gradient(to bottom, #770e0b, #4e0a09, #2b0707)'
      break
    case ['constituency', 'constituencies'].includes(role.toLowerCase()):
      color = 'linear-gradient(to bottom, #3c096f, #2c0b53, #1b0e36)'
      break
    case role.toLowerCase().includes('council'):
    case role.toLowerCase().includes('hub'):
      color = 'linear-gradient(to bottom, #3c096f, #2c0b53, #1b0e36)'
      break
    case role.toLowerCase().includes('stream'):
    case ['ministry', 'ministries'].includes(role.toLowerCase()):
      color = 'linear-gradient(to bottom, #0b3c69, #0b2c53, #0b1b3a)'
      break
    case role.toLowerCase().includes('gatheringservice'):
    case ['federal ministry', 'federal ministries'].includes(
      role.toLowerCase()
    ):
      color = 'linear-gradient(to bottom, #6f4a09, #533a0b, #361f0e)'
      break

    case role.toLowerCase().includes('oversight'):
      color = 'linear-gradient(to bottom, #6f4a09, #533a0b, #361f0e)'
      break

    default:
      break
  }

  return (
    <Card
      data-testid="role-card"
      align="center"
      width="120px"
      height="120px"
      marginRight="5px"
      borderRadius="20px"
      bgGradient={color}
      color="whitesmoke"
    >
      <CardHeader paddingBottom={0}>
        <Heading fontSize={37}>{number}</Heading>
      </CardHeader>
      <CardFooter textAlign="center" padding={0}>
        <Text marginBottom={0} opacity={0.5} fontSize={12}>
          {role}
        </Text>
      </CardFooter>
    </Card>
  )
}

export default RoleCard
