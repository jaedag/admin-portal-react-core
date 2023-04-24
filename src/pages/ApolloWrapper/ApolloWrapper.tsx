import React from 'react'
import LoadingPage from '../LoadingPage/LoadingPage'
import ErrorPage from '../ErrorPage/ErrorPage'

type ApolloWrapperPropsType = {
  placeholder?: boolean
  data: unknown
  loading: boolean
  error?: unknown
  children: JSX.Element
}

const ApolloWrapper = (props: ApolloWrapperPropsType) => {
  const { data, loading, error, placeholder } = props

  if (error) {
    return (
      <ErrorPage
        error={new Error('This page contains an error')}
        // eslint-disable-next-line no-console
        throwToSentry={() => console.error('This is the more verbose error')}
      />
    )
  } else if (data || placeholder) {
    return <>{props.children}</>
  } else if (loading) {
    return <LoadingPage />
  }

  return <LoadingPage />
}

export default ApolloWrapper