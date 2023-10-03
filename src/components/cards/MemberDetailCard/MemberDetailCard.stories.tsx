import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import MemberDetailCard, { MemberDetailCardPropsType } from './MemberDetailCard'
import { FaWhatsapp } from 'react-icons/fa'

export default {
  title: 'Components/Cards/MemberDetailCard',
  component: MemberDetailCard,
  argTypes: {
    heading: { control: 'text' },
    detail: { control: 'text' },
    vacationCount: { control: 'text' },
    loading: { control: 'boolean' },
  },
} as Meta

const Template: StoryFn<MemberDetailCardPropsType> = (args) => (
  <MemberDetailCard {...args} />
)

export const Default = Template.bind({})
Default.args = {
  heading: 'Details',
  detail: 'This is some detail text',
  loading: false,
}

export const WithTrailingIcon = Template.bind({})
WithTrailingIcon.args = {
  heading: 'Details',
  detail: 'This is some detail text',
  loading: false,
  trailingIcon: <FaWhatsapp />,
}

export const Loading = Template.bind({})
Loading.args = {
  heading: '',
  detail: '',
  loading: true,
}

export const onClick = Template.bind({})
onClick.args = {
  heading: 'Details',
  detail: 'This is some detail text',
  loading: false,
  onClick: () => alert('Card clicked'),
}
