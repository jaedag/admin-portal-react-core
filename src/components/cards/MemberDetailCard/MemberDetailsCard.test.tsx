import React from 'react'
import { render, screen } from '@testing-library/react'
import MemberDetailCard, { MemberDetailCardPropsType } from './MemberDetailCard'
import '@testing-library/jest-dom'

describe('MemberDetailCard component', () => {
  const defaultProps: MemberDetailCardPropsType = {
    heading: 'Heading',
    detail: 'Detail',
  }

  it('renders with default props', () => {
    render(<MemberDetailCard {...defaultProps} />)

    expect(screen.getByText('Heading')).toBeInTheDocument()
    expect(screen.getByText('Detail')).toBeInTheDocument()
  })

  it('displays skeleton loader when loading prop is true', () => {
    render(<MemberDetailCard {...defaultProps} loading />)

    expect(screen.getByTestId('skeleton-loader')).toBeInTheDocument()
  })

  it('calls onClick prop when card is clicked', () => {
    const onClick = jest.fn()
    render(<MemberDetailCard {...defaultProps} onClick={onClick} />)

    const card = screen.getByTestId('card')
    card.click()

    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
