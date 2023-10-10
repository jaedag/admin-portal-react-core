import React from 'react'
import ChurchPillButton, { ChurchPillButtonProps } from './ChurchPillButton'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'Components/Buttons/ChurchPillButton',
  component: ChurchPillButton,
} as Meta

const Template: StoryFn<ChurchPillButtonProps> = (
  args: ChurchPillButtonProps
) => <ChurchPillButton {...args} />

export const Default = Template.bind({})
Default.args = {
  church: {
    id: '1',
    name: 'First Church Test',
    __typename: 'Church',
  },
  onClick: () => console.log('Button clicked'),
}

export const Loading = Template.bind({})
Loading.args = {
  church: {
    id: '2',
    name: '',
    __typename: 'Church',
  },
  onClick: () => console.log('Button clicked'),
}
