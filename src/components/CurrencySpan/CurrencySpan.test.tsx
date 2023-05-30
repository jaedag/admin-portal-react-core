import React from 'react'
import { render } from '@testing-library/react'
import CurrencySpan from './CurrencySpan'
import '@testing-library/jest-dom'

describe('CurrencySpan', () => {
  it('renders currency span when number is non-negative', () => {
    const { getByText } = render(<CurrencySpan number={42} />)
    const numberText = getByText('42')
    const currencyText = getByText('GHS')

    expect(numberText).toBeInTheDocument()
    expect(currencyText).toBeInTheDocument()
  })

  it('does not render anything when number is null', () => {
    const { container } = render(<CurrencySpan number={null} />)

    expect(container.firstChild).toBeNull()
  })

  it('does not render anything when number is negative', () => {
    const { container } = render(<CurrencySpan number={-10} />)

    expect(container.firstChild).toBeNull()
  })
})
