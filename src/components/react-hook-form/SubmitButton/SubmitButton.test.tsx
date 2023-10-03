import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import SubmitButton from './SubmitButton'

describe('SubmitButton', () => {
  it('renders the button with the correct text', () => {
    const { getByText } = render(<SubmitButton isSubmitting={false} />)
    expect(getByText('Submit Form')).toBeInTheDocument()
  })

  it('disables the button when isSubmitting is true', () => {
    const { getByRole } = render(<SubmitButton isSubmitting={true} />)
    const button = getByRole('button')
    expect(button).toBeDisabled()
  })

  it('calls the onClick handler when the button is clicked', () => {
    const handleClick = jest.fn()
    render(<SubmitButton isSubmitting={false} onClick={handleClick} />)
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalled()
  })
})
