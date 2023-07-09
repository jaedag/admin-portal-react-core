import React from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Select, { RHFSelectProps } from './Select'
import '@testing-library/jest-dom'
import { useForm } from 'react-hook-form'

const initialValues = {
  testSelect: '',
}
const onSubmit = () => alert('Submitted!')

const options = [
  { key: 'Option 1', value: 'option-1' },
  { key: 'Option 2', value: 'option-2' },
  { key: 'Option 3', value: 'option-3' },
]

const {
  handleSubmit,
  control,
  formState: { errors },
} = useForm<typeof initialValues>()

const defaultProps: RHFSelectProps = {
  label: 'Select an option',
  name: 'testSelect',
  options,
  control,
  errors,
}

describe('Select component', () => {
  it('should render with label', () => {
    const { getByText } = render(
      <form onSubmit={handleSubmit(onSubmit)}>
        <Select {...defaultProps} />
      </form>
    )

    expect(getByText('Select an option')).toBeInTheDocument()
  })

  it('should render with options', () => {
    const { getByText } = render(
      <form onSubmit={handleSubmit(onSubmit)}>
        <Select {...defaultProps} />
      </form>
    )

    options.forEach((option) => {
      expect(getByText(option.key)).toBeInTheDocument()
    })
  })

  it('should render with default option', () => {
    const { getByText } = render(
      <form onSubmit={handleSubmit(onSubmit)}>
        <Select {...defaultProps} />
      </form>
    )

    expect(getByText('Select an option')).toBeInTheDocument()
  })
})
