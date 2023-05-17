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

export const Default = Template.bind({})
Default.args = {
  church: {
    id: '1',
    name: 'Greater Love',
    levelName: 'MegaBacenta',
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
