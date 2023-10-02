import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'
import NoDataCard from './NoDataCard'

describe('NoDataCard', () => {
  it('renders the children', () => {
    render(
      <NoDataCard>
        <div>Test content</div>
      </NoDataCard>
    )

    expect(screen.getByText('Test content')).toBeInTheDocument()
  })

  it('renders a card with a body', () => {
    const { container } = render(
      <NoDataCard>
        <div>Test content</div>
      </NoDataCard>
    )
    const card = container.querySelector('.chakra-card')
    const cardBody = container.querySelector('.chakra-card__body')
    expect(card).toBeInTheDocument()
    expect(cardBody).toBeInTheDocument()
  })
})
