import React from 'react'
import { render } from '@testing-library/react'
import LoadingPage from './LoadingPage'
import '@testing-library/jest-dom'

describe('LoadingPage', () => {
  test('renders a spinner', () => {
    const { getByTestId } = render(<LoadingPage />)
    const spinner = getByTestId('spinner')
    expect(spinner).toBeInTheDocument()
  })

  // TODO: Imlpement test to check whether comopnent was called with correct props

  jest.mock('@chakra-ui/react', () => 'This is PermissionsContainer')
  test('spinner has the correct size', () => {
    const container = render(<LoadingPage />)
    expect(container).toMatchSnapshot()
  })

  test('centered vertically', () => {
    const { getByTestId } = render(<LoadingPage />)
    const spinner = getByTestId('spinner')
    expect(spinner.parentElement).toHaveStyle({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
    })
  })
})
