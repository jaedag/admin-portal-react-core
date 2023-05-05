import React from 'react'
import { render, screen } from '@testing-library/react'
import ChurchDetailCard, { ChurchDetailCardPropsType } from './ChurchDetailCard'
import '@testing-library/jest-dom'

describe('ChurchDetailCard component', () => {
  const defaultProps: ChurchDetailCardPropsType = {
    heading: 'Heading',
    detail: 'Detail',
  }

  it('renders with default props', () => {
    render(<ChurchDetailCard {...defaultProps} />)

    expect(screen.getByText('Heading')).toBeInTheDocument()
    expect(screen.getByText('Detail')).toBeInTheDocument()
  })

  it('displays vacation badge if vacation count is not 0', () => {
    render(<ChurchDetailCard {...defaultProps} vacationCount="2" />)

    const badge = screen.getByTestId('badge')
    expect(badge).toBeInTheDocument()
  })

  it('does not display vacation badge if vacation count is 0', () => {
    render(<ChurchDetailCard {...defaultProps} vacationCount="0" />)

    expect(screen.queryByText('+ 0 on Vacation')).not.toBeInTheDocument()
  })

  it('displays skeleton loader when loading prop is true', () => {
    render(<ChurchDetailCard {...defaultProps} loading />)

    expect(screen.getByTestId('skeleton-loader')).toBeInTheDocument()
  })

  it('calls onClick prop when card is clicked', () => {
    const onClick = jest.fn()
    render(<ChurchDetailCard {...defaultProps} onClick={onClick} />)

    const card = screen.getByTestId('card')
    card.click()

    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
