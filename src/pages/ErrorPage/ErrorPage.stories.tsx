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

export const NetworkError = () => (
  <ErrorPage
    error={mockNetworkError}
    throwToSentry={() => console.error('This is the more verbose error')}
  />
)

export const GraphQLError = () => (
  <ErrorPage
    error={mockNetworkError}
    throwToSentry={() => console.error('This is the more verbose error')}
  />
)
