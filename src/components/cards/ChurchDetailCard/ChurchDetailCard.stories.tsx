import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import ChurchDetailCard, { ChurchDetailCardPropsType } from './ChurchDetailCard'

export default {
  title: 'Components/Cards/ChurchDetailCard',
  component: ChurchDetailCard,
  argTypes: {
    heading: { control: 'text' },
    detail: { control: 'text' },
    vacationCount: { control: 'text' },
    loading: { control: 'boolean' },
  },
} as Meta

const Template: StoryFn<ChurchDetailCardPropsType> = (args) => (
  <ChurchDetailCard {...args} />
)

export const Default = Template.bind({})
Default.args = {
  heading: 'Details',
  detail: 'This is some detail text',
  vacationCount: '2',
  loading: false,
}

export const Loading = Template.bind({})
Loading.args = {
  heading: '',
  detail: '',
  vacationCount: '',
  loading: true,
}

export const NoVacation = Template.bind({})
NoVacation.args = {
  heading: 'Details',
  detail: 'This is some detail text',
  vacationCount: '0',
  loading: false,
}

export const OnClick = Template.bind({})
OnClick.args = {
  heading: 'Details',
  detail: 'This is some detail text',
  vacationCount: '2',
  loading: false,
  onClick: () => alert('Card clicked'),
}
