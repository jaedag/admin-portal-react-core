import React from 'react'
import { Meta } from '@storybook/react'
import ApolloWrapper from './ApolloWrapper'
import MenuButton from '@/components/buttons/MenuButton/MenuButton'
import { AiOutlineUser } from 'react-icons/ai'
import { GraphQLError } from 'graphql'

export default {
  title: 'Pages/ApolloWrapper',
  component: ApolloWrapper,
} as Meta

const mockGraphQLError = new GraphQLError(
  'Int cannot represent non-integer value: { identity: { low: 79538, high: 0 }, labels: ["Bacenta", "Active", "Graduated"], properties: { code: [Integer], sprinterTopUp: 2, mobileNetwork: "MTN", levelName: "Bacen", momoNumber: "0594760323", target: [Integer], urvanTopUp: 1, outbound: false, name: "SOZO ", momoName: "jd", id: "14d1c9f9-3e7f-4c50-8256-4f25d3ad67ad", typename: "Bacenta", recipientCode: "RCP_6smo0yuc6nwdopm" } }'
)

export const WithData = () => (
  <ApolloWrapper data={true} loading={false} error={undefined}>
    <MenuButton
      icon={AiOutlineUser}
      color="green.200"
      title="Churches"
      subtitle="Button subtitle"
      onClick={() => console.log('Clicked')}
    />
  </ApolloWrapper>
)

export const WithLoading = () => (
  <ApolloWrapper data={false} loading={true} error={undefined}>
    <MenuButton
      icon={AiOutlineUser}
      color="green.200"
      title="Churches"
      subtitle="Button subtitle"
      onClick={() => console.log('Clicked')}
    />
  </ApolloWrapper>
)

export const WithError = () => (
  <ApolloWrapper data={false} loading={false} error={mockGraphQLError}>
    <MenuButton
      icon={AiOutlineUser}
      color="green.200"
      title="Churches"
      subtitle="Button subtitle"
      onClick={() => console.log('Clicked')}
    />
  </ApolloWrapper>
)
