import React from 'react'
import { Meta } from '@storybook/react'
import ViewAll from './ViewAll'

export default {
  title: 'Components/Buttons/ViewAll',
  component: ViewAll,
} as Meta

export const Default = () => (
  <ViewAll onClick={() => console.log('Clicked View All')} />
)
