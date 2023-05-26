import React from 'react'
import { render } from '@testing-library/react'
import Timeline, { TimelineElement, TimelineProps } from './Timeline'
import '@testing-library/jest-dom'

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}))

const mockClickCard = jest.fn()

const mockRecord: unknown[] = [
  {
    historyRecord: 'Lorem ipsum dolor sit amet',
    loggedBy: {
      firstName: 'John',
      lastName: 'Doe',
    },
    timeStamp: '2022-04-25T20:30:00.000Z',
    createdAt: {
      date: '2022-04-25T20:30:00.000Z',
    },
  },
  {
    historyRecord: 'consectetur adipiscing elit',
    loggedBy: {
      firstName: 'Jane',
      lastName: 'Doe',
    },
    timeStamp: '2022-04-26T08:15:00.000Z',
    createdAt: {
      date: '2022-04-26T08:15:00.000Z',
    },
  },
]

describe('Timeline', () => {
  const timelineProps = {
    limit: 2,
    record: mockRecord,
    clickCard: mockClickCard,
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders the timeline correctly', () => {
    const container = render(<Timeline {...(timelineProps as TimelineProps)} />)

    expect(container).toMatchSnapshot()
  })

  describe('Timeline', () => {
    it('only renders the specified number of timeline elements', () => {
      const limit = 2
      const { getAllByTestId } = render(
        <Timeline
          record={mockRecord as TimelineElement[]}
          clickCard={() => console.log('Clicked')}
          limit={limit}
        />
      )

      const timelineElements = getAllByTestId('timeline-element')
      expect(timelineElements.length).toBe(limit)
    })
  })
})
