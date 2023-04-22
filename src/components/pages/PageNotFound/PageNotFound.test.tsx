import React from 'react'
import { render, screen, fireEvent, act } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Button } from '@chakra-ui/react'
import { FaHome } from 'react-icons/fa'
import PageNotFound from './PageNotFound'
import '@testing-library/jest-dom'

describe('PageNotFound', () => {
  test('renders the correct error message', () => {
    render(
      <MemoryRouter>
        <PageNotFound />
      </MemoryRouter>
    )

    expect(
      screen.getByText(/Sorry! The page you are looking for does not exist./i)
    ).toBeInTheDocument()
  })

  test('renders a "Take Me Home" button', () => {
    render(
      <MemoryRouter>
        <PageNotFound />
      </MemoryRouter>
    )

    const takeMeHomeButton = screen.getByRole('button', {
      name: /Take Me Home/i,
    })
    expect(takeMeHomeButton).toBeInTheDocument()
    expect(takeMeHomeButton).toHaveAttribute('type', 'button')
  })

  test('clicking the "Take Me Home" button navigates to the home page', async () => {
    const mockNavigate = jest.fn()
    jest.mock('react-router', () => ({
      useNavigate: () => mockNavigate,
    }))

    render(
      <MemoryRouter>
        <PageNotFound />
      </MemoryRouter>
    )
    const button = screen.getByRole('button', { name: /Take Me Home/i })
    console.log(button)
    fireEvent.click(button)

    await act(async () => {
      await Promise.resolve() // wait for the next tick of the event loop
    })

    // expect(mockNavigate).toHaveBeenCalledWith('/')
    expect(mockNavigate).toHaveBeenCalledTimes(1) // Ensure the function was called exactly once
  })
})
