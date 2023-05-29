import React from 'react'
import { Meta } from '@storybook/react'
import ApolloWrapper from './ApolloWrapper'
import MenuButton from '@/components/buttons/MenuButton/MenuButton'
import { AiOutlineUser } from 'react-icons/ai'
import { ApolloError } from '../ErrorPage/ErrorPage'

export default {
  title: 'Pages/ApolloWrapper',
  component: ApolloWrapper,
} as Meta

const mockGraphQLError: ApolloError = {
  name: 'ApolloError',
  graphQLErrors: [
    {
      message:
        'Int cannot represent non-integer value: { identity: { low: 79538, high: 0 }, labels: ["Bacenta", "Active", "Graduated"], properties: { code: [Integer], sprinterTopUp: 2, mobileNetwork: "MTN", levelName: "Bacen", momoNumber: "0594760323", target: [Integer], urvanTopUp: 1, outbound: false, name: "SOZO ", momoName: "jd", id: "14d1c9f9-3e7f-4c50-8256-4f25d3ad67ad", typename: "Bacenta", recipientCode: "RCP_6smo0yuc6nwdopm" } }',
      locations: [{ line: 8, column: 5 }],
      path: ['bacentas', 0, 'target'],
      extensions: {
        code: 'INTERNAL_SERVER_ERROR',
        exception: {
          message:
            'Int cannot represent non-integer value: { identity: { low: 79538, high: 0 }, labels: ["Bacenta", "Active", "Graduated"], properties: { code: [Integer], sprinterTopUp: 2, mobileNetwork: "MTN", levelName: "Bacen", momoNumber: "0594760323", target: [Integer], urvanTopUp: 1, outbound: false, name: "SOZO ", momoName: "jd", id: "14d1c9f9-3e7f-4c50-8256-4f25d3ad67ad", typename: "Bacenta", recipientCode: "RCP_6smo0yuc6nwdopm" } }',
          stacktrace: [
            'GraphQLError: Int cannot represent non-integer value: { identity: { low: 79538, high: 0 }, labels: ["Bacenta", "Active", "Graduated"], properties: { code: [Integer], sprinterTopUp: 2, mobileNetwork: "MTN", levelName: "Bacen", momoNumber: "0594760323", target: [Integer], urvanTopUp: 1, outbound: false, name: "SOZO ", momoName: "jd", id: "14d1c9f9-3e7f-4c50-8256-4f25d3ad67ad", typename: "Bacenta", recipientCode: "RCP_6smo0yuc6nwdopm" } }',
            '    at GraphQLScalarType.serialize (/Users/jd/Documents/dev/church-insights-admin-portal/api/node_modules/graphql/type/scalars.js:61:13)',
            '    at completeLeafValue (/Users/jd/Documents/dev/church-insights-admin-portal/api/node_modules/graphql/execution/execute.js:738:39)',
            '    at completeValue (/Users/jd/Documents/dev/church-insights-admin-portal/api/node_modules/graphql/execution/execute.js:619:12)',
            '    at completeValue (/Users/jd/Documents/dev/church-insights-admin-portal/api/node_modules/graphql/execution/execute.js:584:23)',
            '    at executeField (/Users/jd/Documents/dev/church-insights-admin-portal/api/node_modules/graphql/execution/execute.js:489:19)',
            '    at executeFields (/Users/jd/Documents/dev/church-insights-admin-portal/api/node_modules/graphql/execution/execute.js:413:20)',
            '    at completeObjectValue (/Users/jd/Documents/dev/church-insights-admin-portal/api/node_modules/graphql/execution/execute.js:914:10)',
            '    at completeValue (/Users/jd/Documents/dev/church-insights-admin-portal/api/node_modules/graphql/execution/execute.js:635:12)',
            '    at completeValue (/Users/jd/Documents/dev/church-insights-admin-portal/api/node_modules/graphql/execution/execute.js:584:23)',
            '    at /Users/jd/Documents/dev/church-insights-admin-portal/api/node_modules/graphql/execution/execute.js:696:25',
          ],
        },
      },
    },
  ],
  protocolErrors: [],
  clientErrors: [],
  networkError: null,
  message:
    'Int cannot represent non-integer value: { identity: { low: 79538, high: 0 }, labels: ["Bacenta", "Active", "Graduated"], properties: { code: [Integer], sprinterTopUp: 2, mobileNetwork: "MTN", levelName: "Bacen", momoNumber: "0594760323", target: [Integer], urvanTopUp: 1, outbound: false, name: "SOZO ", momoName: "jd", id: "14d1c9f9-3e7f-4c50-8256-4f25d3ad67ad", typename: "Bacenta", recipientCode: "RCP_6smo0yuc6nwdopm" } }',
}

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
