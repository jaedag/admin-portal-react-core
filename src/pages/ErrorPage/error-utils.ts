export interface GraphQLError {
  message: string
  locations: {
    line: number
    column: number
  }[]
  path: (string | number)[]
  extensions: {
    code: string
    exception: {
      message: string
      stacktrace: string[]
    }
  }
}

export interface ApolloError {
  name: string
  graphQLErrors: GraphQLError[]
  protocolErrors: unknown[]
  clientErrors: unknown[]
  networkError: {
    name: string
    response: unknown
    statusCode: number
    result: {
      errorMessage?: string
      errors: {
        message: string
        extensions: {
          code: string
          exception: {
            stacktrace: string[]
          }
        }
      }[]
    }
  } | null
  message: string
}

export interface FirebaseError {
  code: string
  message: string
  name: string
  stack: string
}

export const parseApolloGQLError = (errors: GraphQLError[]) => {
  const errorArray = errors
    .map(
      ({ message, locations, path }) =>
        `Message: ${message}, Location: ${JSON.stringify(
          locations
        )}, Path: ${JSON.stringify(path)}`
    )
    .join(' \n')

  return errorArray
}
