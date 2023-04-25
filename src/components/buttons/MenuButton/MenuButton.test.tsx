import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { AiOutlineUser } from 'react-icons/ai'
import MenuButton from './MenuButton'
import '@testing-library/jest-dom'

describe('MenuButton', () => {
  it('renders title and subtitle correctly', () => {
    render(
      <MenuButton
        icon={AiOutlineUser}
        color="blue"
        title="Profile"
        subtitle="View your profile"
        onClick={() => {}}
      />
    )

    expect(screen.getByText('Profile')).toBeInTheDocument()
    expect(screen.getByText('View your profile')).toBeInTheDocument()
  })

  it('calls onClick function when clicked', () => {
    const handleClick = jest.fn()
    render(
      <MenuButton
        icon={AiOutlineUser}
        color="blue"
        title="Profile"
        onClick={handleClick}
      />
    )

    fireEvent.click(screen.getByText('Profile'))
    expect(handleClick).toHaveBeenCalled()
  })

  it('capitalizes the first letter of the title', () => {
    render(
      <MenuButton
        icon={AiOutlineUser}
        color="blue"
        title="profile"
        onClick={() => {}}
      />
    )

    expect(screen.getByText('Profile')).toBeInTheDocument()
  })
})
