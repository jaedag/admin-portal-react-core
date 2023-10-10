import React from 'react'
import { screen, fireEvent, render } from '@testing-library/react'
import MemberDetailsWithAvatar from './AvatarWithName'
import { Member } from '@jaedag/admin-portal-types'
import '@testing-library/jest-dom'

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
        loading={false}
        onClick={() => {}}
      />
    )

    const avatarElement = screen.getByTestId('avatar')
    expect(avatarElement).toBeInTheDocument()

    const titleElement = screen.getByText('Leader')
    expect(titleElement).toBeInTheDocument()

    const nameElement = screen.getByText(leader.nameWithTitle)
    expect(nameElement).toBeInTheDocument()
  })

  it('renders skeleton loading state when loading is true', () => {
    render(
      <MemberDetailsWithAvatar
        leader={leader as Member}
        loading
        onClick={() => {}}
      />
    )

    const skeletonCircle = screen.getByTestId('skeleton-circle')
    const skeletonText = screen.getByTestId('skeleton-text')

    expect(skeletonCircle).toBeInTheDocument()
    expect(skeletonText).toBeInTheDocument()
  })

  it('calls the onClick function when clicked', () => {
    const onClick = jest.fn()
    render(
      <MemberDetailsWithAvatar
        leader={leader}
        loading={false}
        onClick={onClick}
      />
    )

    const componentElement = screen.getByTestId('container')
    fireEvent.click(componentElement)

    expect(onClick).toHaveBeenCalled()
  })
})
