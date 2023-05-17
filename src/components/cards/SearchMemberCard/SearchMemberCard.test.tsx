import React from 'react'
import { render } from '@testing-library/react'
import SearchMemberCard from './SearchMemberCard'
import { Member } from '@/types'
import '@testing-library/jest-dom'

// Mock member data
const member = {
  firstName: 'John',
  lastName: 'Doe',
  pictureUrl: 'https://example.com/avatar.jpg',
  ministry: {
    name: 'Ministry of Awesome',
  },
} as Member

describe('SearchMemberCard', () => {
  it('renders member information correctly', () => {
    const { getByText } = render(<SearchMemberCard member={member} />)

    const nameElement = getByText(`${member.firstName} ${member.lastName}`)
    expect(nameElement).toBeInTheDocument()

    const ministryElement = getByText(member.ministry?.name ?? '')
    expect(ministryElement).toBeInTheDocument()
  })

  it('matches snapshot', () => {
    const { container } = render(<SearchMemberCard member={member} />)
    expect(container).toMatchSnapshot()
  })

  it('does not render ministry if member has no ministry', () => {
    const memberWithoutMinistry = { ...member, ministry: null } as Member
    const { queryByText } = render(
      <SearchMemberCard member={memberWithoutMinistry} />
    )

    const ministryElement = queryByText(member.ministry?.name ?? '')
    expect(ministryElement).toBeNull()
  })

  it('does not render picture if member has no picture', () => {
    const memberWithoutPicture = { ...member, pictureUrl: '' } as Member
    const { queryByTestId } = render(
      <SearchMemberCard member={memberWithoutPicture} />
    )

    const pictureElement = queryByTestId('member-picture')
    expect(pictureElement).toBeNull()
  })

  it('calls onClick when clicked', () => {
    const onClick = jest.fn()
    const { getByTestId } = render(
      <SearchMemberCard member={member} onClick={onClick} />
    )

    const card = getByTestId('search-member-card')
    card.click()

    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
