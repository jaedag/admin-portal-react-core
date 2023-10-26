import { ApolloError, ServerError } from '@apollo/client'

export interface FirebaseError {
  code: string
  message: string
  name: string
  stack: string
}

export const parseApolloError = (error: ApolloError) => {
  const { graphQLErrors, networkError } = error

  if (graphQLErrors) {
    const errorArray = graphQLErrors.map(
      ({ message, locations, path }) =>
        `[GraphQL error]: Message: ${message}, Location: ${JSON.stringify(
          locations
        )}, Path: ${JSON.stringify(path)}`
    )

    return errorArray
  }

  if (networkError) {
    return `[Network error]: ${JSON.stringify(networkError)}`
  }
}

export const isServerError = (
  networkError: ServerError
): networkError is ServerError => {
  return !!networkError?.result
}
