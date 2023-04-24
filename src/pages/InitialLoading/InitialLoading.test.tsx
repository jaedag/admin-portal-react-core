import React from 'react'
import { render, screen } from '@testing-library/react'
import InitialLoading from './InitialLoading'
import '@testing-library/jest-dom'

describe('InitialLoading', () => {
  test('renders a spinner', () => {
    const { getByTestId } = render(<InitialLoading />)
    const spinner = getByTestId('spinner')
    expect(spinner).toHaveClass('chakra-spinner')
    expect(spinner).toBeInTheDocument()
  })

  test('renders custom text if provided', () => {
    const { getByText } = render(
      <InitialLoading text="Custom loading message" />
    )
    const message = getByText('Custom loading message')
    expect(message).toBeInTheDocument()
  })

  test('renders default text if no text is provided', () => {
    const { getByText } = render(<InitialLoading />)
    const message = getByText('Please wait while we log you in')
    expect(message).toBeInTheDocument()
  })
})
