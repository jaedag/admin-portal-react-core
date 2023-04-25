import React from 'react'
import { action } from '@storybook/addon-actions'
import { MemoryRouter } from 'react-router'
import Timeline, { TimelineProps, TimelineElement } from './Timeline'
import { Meta, StoryFn } from '@storybook/react'
import { Member } from '@/types'

const record: TimelineElement[] = [
  {
    historyRecord: 'Some history record',
    loggedBy: {
      firstName: 'John',
      lastName: 'Doe',
    } as Member,
    timeStamp: '2022-04-22T09:30:00.000Z',
    createdAt: {
      date: '2022-04-22T00:00:00.000Z',
    },
  },
  {
    historyRecord: 'Another history record',
    loggedBy: {
      firstName: 'Jane',
      lastName: 'Doe',
    } as Member,
    timeStamp: '2022-04-23T10:00:00.000Z',
    createdAt: {
      date: '2022-04-23T00:00:00.000Z',
    },
  },
  {
    historyRecord: 'Yet another history record',
    loggedBy: {
      firstName: 'Jane',
      lastName: 'Doe',
    } as Member,
    timeStamp: '2022-04-24T10:00:00.000Z',
    createdAt: {
      date: '2022-04-24T00:00:00.000Z',
    },
  },
]

export default {
  title: 'Components/Timeline',
  component: Timeline,
  args: { record: record, clickCard: action('clicked'), limit: 10 },
} as Meta

const Template: StoryFn<TimelineProps> = (args: TimelineProps) => (
  <MemoryRouter>
    <Timeline {...args} record={record} clickCard={action('clicked')} />
  </MemoryRouter>
)

export const Default = Template.bind({})
Default.args = {
  record: record,
  limit: 10,
}

export const Limited = Template.bind({})
Limited.args = {
  limit: 1,
}

export const ChurchModifier = Template.bind({})
ChurchModifier.args = {
  limit: 10,
  modifier: 'church',
}
