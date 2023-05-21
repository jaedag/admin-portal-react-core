import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import SearchMemberCard, {
  SearchMemberCardPropsInterface,
} from './SearchMemberCard'
import { Member } from '@/types'

export default {
  title: 'Components/Cards/SearchMemberCard',
  component: SearchMemberCard,
  argTypes: {
    member: { control: 'object' },
  },
} as Meta

const Template: StoryFn<SearchMemberCardPropsInterface> = (args) => (
  <SearchMemberCard {...args} />
)

export const Default = Template.bind({})
Default.args = {
  member: {
    id: '1',
    firstName: 'Dan',
    lastName: 'Abramov',
    pictureUrl: 'https://bit.ly/dan-abramov',
    fellowship: {
      id: '1',
      name: 'Tuesday Night Football',
    },
    ministry: {
      id: '1',
      name: 'Greater Love Choir',
    },
  } as Member,
  onClick: () => alert('Card clicked'),
}

export const MemberWithoutMinitry = Template.bind({})
MemberWithoutMinitry.args = {
  member: {
    id: '1',
    firstName: 'Dan',
    lastName: 'Abramov',
    pictureUrl: 'https://bit.ly/dan-abramov',
    fellowship: {
      id: '1',
      name: 'Tuesday Night Football',
    },
  } as Member,
  onClick: () => alert('Card clicked'),
}

export const MemberWithoutGroups = Template.bind({})
MemberWithoutGroups.args = {
  member: {
    id: '1',
    firstName: 'Dan',
    lastName: 'Abramov',
    pictureUrl: 'https://bit.ly/dan-abramov',
  } as Member,
  onClick: () => alert('Card clicked'),
}
