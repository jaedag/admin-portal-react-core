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

  jest.mock('@chakra-ui/react', () => ({
    ...jest.requireActual('@chakra-ui/react'),
    Spinner: jest.fn(() => <div data-testid="spinner" />),
  }))

  const { Spinner } = jest.requireMock('@chakra-ui/react')

  test('spinner has the correct size', () => {
    // const { getByTestId } = render(<LoadingPage />)
    // const spinner = getByTestId('spinner')
    // expect(Spinner).toHaveBeenCalledWith(
    //   expect.objectContaining({ size: 'xl' }),
    //   expect.anything()
    // )
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
