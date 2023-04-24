import React from 'react'
import { render, screen } from '@testing-library/react'
import RoleCard from './RoleCard'
import { Role } from '@/types'
import { ChakraProvider } from '@chakra-ui/react'
import '@testing-library/jest-dom'

describe('RoleCard', () => {
  const mockProps: { number: number; role: Role } = {
    number: 1,
    role: 'leaderFellowship',
  }

  it('renders the card with the correct number', () => {
    render(
      <ChakraProvider>
        <RoleCard {...mockProps} />
      </ChakraProvider>
    )
    const number = screen.getByTestId('role-card')

    expect(number).toHaveTextContent('1')
  })

  it('renders the card with the correct role text', () => {
    render(
      <ChakraProvider>
        <RoleCard {...mockProps} />
      </ChakraProvider>
    )
    const roleText = screen.getByTestId('role-card')

    expect(roleText).toBeInTheDocument()
  })
})
