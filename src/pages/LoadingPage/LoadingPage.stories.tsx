import React from 'react'
import { Meta } from '@storybook/react'
import LoadingPage from './LoadingPage'

export default {
  title: 'Pages/LoadingPage',
  component: LoadingPage,
} as Meta

export const Default = () => <LoadingPage />
