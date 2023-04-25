import React from 'react'
import { Meta } from '@storybook/react'
import ApolloWrapper from './ApolloWrapper'
import MenuButton from '@/components/buttons/MenuButton/MenuButton'
import { AiOutlineUser } from 'react-icons/ai'

export default {
  title: 'Pages/ApolloWrapper',
  component: ApolloWrapper,
} as Meta

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
  <ApolloWrapper
    data={false}
    loading={false}
    error={new Error('This page contains an error')}
  >
    <MenuButton
      icon={AiOutlineUser}
      color="green.200"
      title="Churches"
      subtitle="Button subtitle"
      onClick={() => console.log('Clicked')}
    />
  </ApolloWrapper>
)
