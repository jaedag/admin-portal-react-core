import React from 'react'
import { action } from '@storybook/addon-actions'
import AvatarWithName, { AvatarWithNamePropsType } from './AvatarWithName'
import { Meta, StoryFn } from '@storybook/react'
import { Member } from '@jaedag/admin-portal-types'

export default {
  title: 'Components/AvatarWithName',
  component: AvatarWithName,
  args: {
    member: {
      name: 'John Doe',
      fullName: 'John Doe',
      pictureUrl: 'https://example.com/avatar.jpg',
      nameWithTitle: 'John Doe',
    },
    onClick: action('clicked'),
  },
} as Meta

const props = {
  member: {
    firstName: 'John',
    lastName: 'Doe',
    fullName: 'John Doe',
    pictureUrl: 'https://bit.ly/dan-abramov',
    nameWithTitle: 'Rev. John Doe',
  } as Member,
  title: 'member',
  onClick: () => alert('Button clicked'),
}

const Template: StoryFn<AvatarWithNamePropsType> = (
  args: AvatarWithNamePropsType
) => <AvatarWithName {...args} />

export const Default = Template.bind({})
Default.args = {
  member: props.member,
  onClick: props.onClick,
  loading: false,
}

export const Loading = Template.bind({})
Loading.args = {
  member: props.member,
  loading: true,
}
