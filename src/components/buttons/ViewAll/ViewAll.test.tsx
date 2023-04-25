import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import ViewAll from './ViewAll'
import '@testing-library/jest-dom'

describe('ViewAll', () => {
  it('should call onClick prop when button is clicked', () => {
    const onClickMock = jest.fn()
    const { getByText } = render(<ViewAll onClick={onClickMock} />)
    const button = getByText('View All')
    fireEvent.click(button)
    expect(onClickMock).toHaveBeenCalled()
  })

  it('button renders correctly', () => {
    const onClickMock = jest.fn()
    const { getByText } = render(<ViewAll onClick={onClickMock} />)
    const button = getByText('View All')
    expect(button).toBeInTheDocument()
  })
})
