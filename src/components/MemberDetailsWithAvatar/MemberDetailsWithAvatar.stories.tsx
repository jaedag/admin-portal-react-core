import React from 'react'
import { action } from '@storybook/addon-actions'
import MemberDetailsWithAvatar, {
  MemberDetailsWithAvatarPropsType,
} from './MemberDetailsWithAvatar'
import { Meta, StoryFn } from '@storybook/react'
import { Member } from '@jaedag/admin-portal-types'

export default {
  title: 'Components/MemberDetailsWithAvatar',
  component: MemberDetailsWithAvatar,
  args: {
    leader: {
      name: 'John Doe',
      fullName: 'John Doe',
      pictureUrl: 'https://example.com/avatar.jpg',
      nameWithTitle: 'John Doe',
    },
    title: 'Leader',
    onClick: action('clicked'),
  },
} as Meta

const props = {
  leader: {
    firstName: 'John',
    lastName: 'Doe',
    fullName: 'John Doe',
    pictureUrl: 'https://bit.ly/dan-abramov',
    nameWithTitle: 'Rev. John Doe',
  } as Member,
  title: 'Leader',
  onClick: () => console.log('Button clicked'),
}

const Template: StoryFn<MemberDetailsWithAvatarPropsType> = (
  args: MemberDetailsWithAvatarPropsType
) => <MemberDetailsWithAvatar {...args} />

export const Default = Template.bind({})
Default.args = {
  leader: props.leader,
  onClick: props.onClick,
  title: props.title,
}

export const Loading = Template.bind({})
Loading.args = {
  leader: null as unknown as Member,
  title: 'Leader',
}

export const NoLeader = Template.bind({})
NoLeader.args = {}
