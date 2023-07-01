import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import SearchChurchCard, {
  SearchChurchCardPropsInterface,
} from './SearchChurchCard'
import { Church, Member } from '@jaedag/admin-portal-types'

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
    vacationStatus: 'Active',
    __typename: 'Fellowship',
    leader: {
      id: '1',
      firstName: 'Dan',
      lastName: 'Abramov',
      nameWithTitle: 'Ps. Dan Abramov',
      pictureUrl: 'https://bit.ly/dan-abramov',
    } as Member,
  },
  onClick: () => alert('Card clicked'),
}

export const WithBacenta = Template.bind({})
WithBacenta.args = {
  church: {
    id: '1',
    name: 'Greater Love',
    levelName: 'Bacenta',
    vacationStatus: 'Active',
    __typename: 'Bacenta',
    leader: {
      id: '1',
      firstName: 'Dan',
      lastName: 'Abramov',
      nameWithTitle: 'Ps. Dan Abramov',
      pictureUrl: 'https://bit.ly/dan-abramov',
    } as Member,
  },
  onClick: () => alert('Card clicked'),
}

export const WithConstituency = Template.bind({})
WithConstituency.args = {
  church: {
    id: '1',
    name: 'Greater Love',
    levelName: 'Constituency',
    __typename: 'Constituency',
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

export const WithCouncil = Template.bind({})
WithCouncil.args = {
  church: {
    id: '1',
    name: 'Greater Love',
    levelName: 'Council',
    __typename: 'Council',
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

export const WithStream = Template.bind({})
WithStream.args = {
  church: {
    id: '1',
    name: 'Greater Love',
    levelName: 'Stream',
    __typename: 'Stream',
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

export const WithCampus = Template.bind({})
WithCampus.args = {
  church: {
    id: '1',
    name: 'Greater Love',
    levelName: 'Campus',
    __typename: 'Campus',
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

export const WithOversight = Template.bind({})
WithOversight.args = {
  church: {
    id: '1',
    name: 'Greater Love',
    levelName: 'Oversight',
    __typename: 'Oversight',
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
