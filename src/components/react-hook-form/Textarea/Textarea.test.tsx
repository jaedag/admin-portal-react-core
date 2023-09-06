import React from 'react'
import { render, screen } from '@testing-library/react'
import Checkbox from './Textarea'
import '@testing-library/jest-dom'
import { FieldErrors, useForm } from 'react-hook-form'

const initialValues = {
  checkboxTest: '',
}

const initialErrors = {
  checkboxTest: 'Initial Checkbox',
}

const onSubmit = () => alert('Submitted!')

describe('Checkbox Component', () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<typeof initialValues>()

  it('renders without crashing', () => {
    render(
      <form onSubmit={handleSubmit(onSubmit)}>
        <Checkbox
          name="checkboxTest"
          placeholder="Enter some value here"
          control={control}
          errors={errors}
        />
      </form>
    )
  })

  it('renders a label when passed a label prop', () => {
    render(
      <form onSubmit={handleSubmit(onSubmit)}>
        <Checkbox
          name="checkboxTest"
          label="Test Label"
          control={control}
          errors={errors}
        />
      </form>
    )
    const label = screen.getByText('Test Label')
    expect(label).toBeInTheDocument()
  })

  it('renders an checkbox field', () => {
    render(
      <form onSubmit={handleSubmit(onSubmit)}>
        <Checkbox
          name="checkboxTest"
          placeholder="Enter some value here"
          control={control}
          errors={errors}
        />
      </form>
    )
    const checkbox = screen.getByRole('textbox')
    expect(checkbox).toBeInTheDocument()
  })

  const customErrors = {
    checkboxTest: { message: 'This is an error message' },
  }

  it('displays error message when there is a form validation error', () => {
    render(
      <form onSubmit={handleSubmit(onSubmit)}>
        <Checkbox
          name="checkboxTest"
          placeholder="Enter some value here"
          control={control}
          errors={customErrors as unknown as FieldErrors<typeof initialValues>}
        />
      </form>
    )
    const errorMessage = screen.getByText(initialErrors.checkboxTest)
    expect(errorMessage).toBeInTheDocument()
  })

  it('does not display error message when there is no form validation error', () => {
    render(
      <form onSubmit={handleSubmit(onSubmit)}>
        <Checkbox name="checkboxTest" control={control} errors={errors} />
      </form>
    )
    const errorMessage = screen.queryByText(/.+/)
    expect(errorMessage).toBeNull()
  })
})
