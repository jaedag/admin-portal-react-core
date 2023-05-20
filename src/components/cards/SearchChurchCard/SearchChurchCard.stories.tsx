import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import SearchChurchCard, {
  SearchChurchCardPropsInterface,
} from './SearchChurchCard'
import { Church } from '@/types'

export default {
  title: 'Components/Cards/SearchChurchCard',
  component: SearchChurchCard,
  argTypes: {
    church: { control: 'object' },
  },
} as Meta

const Template: StoryFn<SearchChurchCardPropsInterface> = (args) => (
  <SearchChurchCard {...args} />
)

export const WithFellowship = Template.bind({})
WithFellowship.args = {
  church: {
    id: '1',
    name: 'Greater Love',
    levelName: 'Fellowship',
    __typename: 'Fellowship',
    leader: {
      id: '1',
      firstName: 'Dan',
      lastName: 'Abramov',
      nameWithTitle: 'Ps. Dan Abramov',
      pictureUrl: 'https://bit.ly/dan-abramov',
    },
  } as Church,
  onClick: () => alert('Card clicked'),
}

export const WithBacenta = Template.bind({})
WithBacenta.args = {
  church: {
    id: '1',
    name: 'Greater Love',
    levelName: 'Bacenta',
    __typename: 'Bacenta',
    leader: {
      id: '1',
      firstName: 'Dan',
      lastName: 'Abramov',
      nameWithTitle: 'Ps. Dan Abramov',
      pictureUrl: 'https://bit.ly/dan-abramov',
    },
  } as Church,
  onClick: () => alert('Card clicked'),
}
