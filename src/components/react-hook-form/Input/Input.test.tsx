import React from 'react'
import { render, screen } from '@testing-library/react'
import Input from './Input'
import '@testing-library/jest-dom'
import { FieldErrors, useForm } from 'react-hook-form'

const initialValues = {
  inputTest: '',
}

const initialErrors = {
  inputTest: 'Initial Input',
}

const onSubmit = () => alert('Submitted!')

describe('Input Component', () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<typeof initialValues>()

  it('renders without crashing', () => {
    render(
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="inputTest"
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
        <Input
          name="inputTest"
          label="Test Label"
          control={control}
          errors={errors}
        />
      </form>
    )
    const label = screen.getByText('Test Label')
    expect(label).toBeInTheDocument()
  })

  it('renders an input field', () => {
    render(
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="inputTest"
          placeholder="Enter some value here"
          control={control}
          errors={errors}
        />
      </form>
    )
    const input = screen.getByRole('textbox')
    expect(input).toBeInTheDocument()
  })

  const customErrors = {
    inputTest: { message: 'This is an error message' },
  }

  it('displays error message when there is a form validation error', () => {
    render(
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="inputTest"
          placeholder="Enter some value here"
          control={control}
          errors={customErrors as unknown as FieldErrors<typeof initialValues>}
        />
      </form>
    )
    const errorMessage = screen.getByText(initialErrors.inputTest)
    expect(errorMessage).toBeInTheDocument()
  })

  it('does not display error message when there is no form validation error', () => {
    render(
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input name="inputTest" control={control} errors={errors} />
      </form>
    )
    const errorMessage = screen.queryByText(/.+/)
    expect(errorMessage).toBeNull()
  })
})
