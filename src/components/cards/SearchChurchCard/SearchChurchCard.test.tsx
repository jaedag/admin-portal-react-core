import React from 'react'
import { render } from '@testing-library/react'
import SearchChurchCard from './SearchChurchCard'
import { Church } from '@jaedag/admin-portal-types'
import '@testing-library/jest-dom'

// Mock church data
const church = {
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
} as Church
describe('SearchChurchCard', () => {
  it('renders church information correctly', () => {
    const { getByText } = render(<SearchChurchCard church={church} />)

    const nameElement = getByText(`${church.name} ${church.levelName}`)
    expect(nameElement).toBeInTheDocument()

    const leaderElement = getByText(church.leader?.nameWithTitle ?? '')
    expect(leaderElement).toBeInTheDocument()
  })

  it('matches snapshot', () => {
    const { container } = render(<SearchChurchCard church={church} />)
    expect(container).toMatchSnapshot()
  })

  it('does not render picture if church has no picture', () => {
    const churchWithoutPicture = { ...church, pictureUrl: '' } as Church
    const { queryByTestId } = render(
      <SearchChurchCard church={churchWithoutPicture} />
    )

    const pictureElement = queryByTestId('church-picture')
    expect(pictureElement).toBeNull()
  })

  it('calls onClick when clicked', () => {
    const onClick = jest.fn()
    const { getByTestId } = render(
      <SearchChurchCard church={church} onClick={onClick} />
    )

    const card = getByTestId('search-church-card')
    card.click()

    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
