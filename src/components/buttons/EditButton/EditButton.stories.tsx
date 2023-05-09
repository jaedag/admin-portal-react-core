import React from 'react'
import { Meta } from '@storybook/react'
import EditButton from './EditButton'

export default {
  title: 'Components/Buttons/EditButton',
  component: EditButton,
} as Meta

export const Default = () => (
  <EditButton onClick={() => console.log('Clicked Edit Buttonn')} />
)
