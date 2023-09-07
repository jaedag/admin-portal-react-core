import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { AiOutlineUser } from 'react-icons/ai'
import NumberButton from './NumberButton'
import '@testing-library/jest-dom'

describe('NumberButton', () => {
  it('renders title and subtitle correctly', () => {
    render(
      <NumberButton
        number={98}
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
      <NumberButton
        number={98}
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
      <NumberButton
        number={98}
        color="blue"
        title="profile"
        onClick={() => {}}
      />
    )

    expect(screen.getByText('Profile')).toBeInTheDocument()
  })
})
