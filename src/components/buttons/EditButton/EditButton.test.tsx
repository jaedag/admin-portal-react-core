import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import EditButton from './EditButton'
import '@testing-library/jest-dom'

describe('EditButton', () => {
  it('should call onClick prop when button is clicked', () => {
    const onClickMock = jest.fn()
    const { getByText } = render(<EditButton onClick={onClickMock} />)
    const button = getByText('Edit')
    fireEvent.click(button)
    expect(onClickMock).toHaveBeenCalled()
  })

  it('button renders correctly', () => {
    const onClickMock = jest.fn()
    const { getByText } = render(<EditButton onClick={onClickMock} />)
    const button = getByText('Edit')
    expect(button).toBeInTheDocument()
  })
})
