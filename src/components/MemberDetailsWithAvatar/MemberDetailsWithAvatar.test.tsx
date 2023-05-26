import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import MemberDetailsWithAvatar from './MemberDetailsWithAvatar'
import { Member } from '@jaedag/admin-portal-types'

describe('MemberDetailsWithAvatar', () => {
  const leader = {
    firstName: 'John',
    lastName: 'Doe',
    fullName: 'John Doe',
    pictureUrl: 'https://bit.ly/dan-abramov',
    nameWithTitle: 'Rev. John Doe',
  } as Member

  it('renders the component with leader details', () => {
    render(
      <MemberDetailsWithAvatar
        leader={leader}
        title="Leader"
        onClick={() => {}}
      />
    )

    const avatarElement = screen.getByRole('img', { name: leader.fullName })
    expect(avatarElement).toBeInTheDocument()

    const titleElement = screen.getByText('Leader')
    expect(titleElement).toBeInTheDocument()

    const nameElement = screen.getByText(leader.nameWithTitle)
    expect(nameElement).toBeInTheDocument()
  })

  it('renders the component with skeleton loading state when leader is null', () => {
    render(
      <MemberDetailsWithAvatar
        leader={null as unknown as Member}
        title="Leader"
        onClick={() => {}}
      />
    )

    const skeletonCircleElement = screen.getByTestId('skeleton-circle')
    expect(skeletonCircleElement).toBeInTheDocument()

    const skeletonTextElement = screen.getByTestId('skeleton-text')
    expect(skeletonTextElement).toBeInTheDocument()
  })

  it('calls the onClick function when clicked', () => {
    const onClick = jest.fn()
    render(
      <MemberDetailsWithAvatar
        leader={leader}
        title="Leader"
        onClick={onClick}
      />
    )

    const componentElement = screen.getByRole('button')
    fireEvent.click(componentElement)

    expect(onClick).toHaveBeenCalled()
  })
})
