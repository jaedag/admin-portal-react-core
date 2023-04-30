import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ChurchPillButton, { ChurchPillButtonProps } from './ChurchPillButton'

describe('ChurchPillButton', () => {
  const church = { id: '1', name: 'My Church', __typename: 'Church' }
  const onClick = jest.fn()
  const defaultProps: ChurchPillButtonProps = {
    church,
    onClick,
  }

  it('renders button with church name', () => {
    render(<ChurchPillButton {...defaultProps} />)
    expect(screen.getByText(church.name)).toBeInTheDocument()
  })

  it('calls onClick when button is clicked', () => {
    render(<ChurchPillButton {...defaultProps} />)
    const button = screen.getByRole('button')
    userEvent.click(button)
    expect(onClick).toHaveBeenCalled()
  })

  it('shows skeleton while church name is loading', () => {
    render(
      <ChurchPillButton
        {...defaultProps}
        church={{ id: '1', name: '', __typename: 'Church' }}
      />
    )
    expect(screen.getByRole('status')).toBeInTheDocument()
    expect(screen.queryByText(church.name)).not.toBeInTheDocument()
  })
})
