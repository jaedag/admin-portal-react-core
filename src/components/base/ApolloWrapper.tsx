import React from 'react'
import ErrorScreen from './ErrorScreen'
import LoadingScreen from './LoadingScreen'

type ApolloWrapperPropsType = {
  placeholder?: boolean
  data: any
  loading: boolean
  error?: any | undefined
  children: JSX.Element
}

const ApolloWrapper = (props: ApolloWrapperPropsType) => {
  const { data, loading, error, placeholder } = props

  if (error) {
    return <ErrorScreen error={error} />
  } else if (data || placeholder) {
    return <>{props.children}</>
  } else if (loading) {
    return <LoadingScreen />
  }

  return <LoadingScreen />
}

export default ApolloWrapper
