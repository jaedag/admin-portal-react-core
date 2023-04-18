import React from 'react'
import { Meta } from '@storybook/react'
import ErrorPage from './ErrorPage'

export default {
  title: 'Pages/ErrorPage',
  component: ErrorPage,
} as Meta

export const Default = () => (
  <ErrorPage
    error={new Error('This page contains an error')}
    throwToSentry={() => console.error('This is the more verbose error')}
  />
)
