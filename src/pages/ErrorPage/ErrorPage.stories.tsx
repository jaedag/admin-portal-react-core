import React from 'react'
import { Meta } from '@storybook/react'
import ErrorPage, { ApolloError } from './ErrorPage'

export default {
  title: 'Pages/ErrorPage',
  component: ErrorPage,
} as Meta

const mockNetworkError: ApolloError = {
  name: 'ApolloError',
  graphQLErrors: [],
  protocolErrors: [],
  clientErrors: [],
  networkError: {
    name: 'ServerError',
    response: {},
    statusCode: 400,
    result: {
      errors: [
        {
          message: 'Cannot query field "target" on type "Bacenta".',
          extensions: {
            code: 'GRAPHQL_VALIDATION_FAILED',
            exception: {
              stacktrace: [
                'GraphQLError: Cannot query field "target" on type "Bacenta".',
                '    at Object.Field (/Users/jd/Documents/dev/church-insights-admin-portal/api/node_modules/graphql/validation/rules/FieldsOnCorrectTypeRule.js:51:13)',
                '    at Object.enter (/Users/jd/Documents/dev/church-insights-admin-portal/api/node_modules/graphql/language/visitor.js:301:32)',
                '    at Object.enter (/Users/jd/Documents/dev/church-insights-admin-portal/api/node_modules/graphql/utilities/TypeInfo.js:391:27)',
                '    at visit (/Users/jd/Documents/dev/church-insights-admin-portal/api/node_modules/graphql/language/visitor.js:197:21)',
                '    at validate (/Users/jd/Documents/dev/church-insights-admin-portal/api/node_modules/graphql/validation/validate.js:91:24)',
                '    at validate (/Users/jd/Documents/dev/church-insights-admin-portal/api/node_modules/apollo-server-core/src/requestPipeline.ts:474:27)',
                '    at processGraphQLRequest (/Users/jd/Documents/dev/church-insights-admin-portal/api/node_modules/apollo-server-core/src/requestPipeline.ts:265:30)',
                '    at processTicksAndRejections (node:internal/process/task_queues:96:5)',
                '    at processHTTPRequest (/Users/jd/Documents/dev/church-insights-admin-portal/api/node_modules/apollo-server-core/src/runHttpQuery.ts:436:24)',
              ],
            },
          },
        },
      ],
    },
  },
  message: 'Response not successful: Received status code 400',
}

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

const networkError502 = {
  name: 'ApolloError',
  graphQLErrors: [],
  protocolErrors: [],
  clientErrors: [],
  networkError: {
    name: 'ServerError',
    response: {},
    statusCode: 502,
    result: {
      errorMessage:
        '2023-07-01T16:58:29.536Z c93754dd-2a97-4ab7-a5b7-330920779e9f Task timed out after 26.05 seconds',
    },
    message: 'Response not successful: Received status code 400',
  },
}

export const NetworkError = () => (
  <ErrorPage
    error={mockNetworkError}
    throwToSentry={() => console.error('This is the more verbose error')}
  />
)

export const NetworkError502 = () => (
  <ErrorPage
    error={networkError502 as unknown as ApolloError}
    throwToSentry={() => console.error('This is the more verbose error')}
  />
)

export const GraphQLError = () => (
  <ErrorPage
    error={mockGraphQLError}
    throwToSentry={() => console.error('This is the more verbose error')}
  />
)
