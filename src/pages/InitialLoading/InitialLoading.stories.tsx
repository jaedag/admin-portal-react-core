import React from 'react'
import { Meta } from '@storybook/react'
import InitialLoading from './InitialLoading'

export default {
  title: 'Pages/InitialLoading',
  component: InitialLoading,
} as Meta

export const Default = () => <InitialLoading />

export const CustomText = () => (
  <InitialLoading text="Loading your profile..." />
)
