import React from 'react'
import { screen, fireEvent, render } from '@testing-library/react'
import MemberDetailsWithAvatar from './AvatarWithName'
import { Member } from '@jaedag/admin-portal-types'
import '@testing-library/jest-dom'

describe('MemberDetailsWithAvatar', () => {
  const member = {
    firstName: 'John',
    lastName: 'Doe',
    fullName: 'John Doe',
    pictureUrl: 'https://bit.ly/dan-abramov',
    nameWithTitle: 'Rev. John Doe',
  } as Member

  it('renders the component with member details', () => {
    render(
      <MemberDetailsWithAvatar
        member={member}
        loading={false}
        onClick={() => {}}
      />
    )

    const avatarElement = screen.getByTestId('avatar')
    expect(avatarElement).toBeInTheDocument()

    const titleElement = screen.getByText('member')
    expect(titleElement).toBeInTheDocument()

    const nameElement = screen.getByText(member.nameWithTitle)
    expect(nameElement).toBeInTheDocument()
  })

  it('renders skeleton loading state when loading is true', () => {
    render(
      <MemberDetailsWithAvatar
        member={member as Member}
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
        member={member}
        loading={false}
        onClick={onClick}
      />
    )

    const componentElement = screen.getByTestId('container')
    fireEvent.click(componentElement)

    expect(onClick).toHaveBeenCalled()
  })
})
