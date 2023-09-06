import React from 'react'
import { render, screen } from '@testing-library/react'
import Textarea from './Textarea'
import '@testing-library/jest-dom'
import { FieldErrors, useForm } from 'react-hook-form'

const initialValues = {
  textareaTest: '',
}

const initialErrors = {
  textareaTest: 'Initial Textarea',
}

const onSubmit = () => alert('Submitted!')

describe('Textarea Component', () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<typeof initialValues>()

  it('renders without crashing', () => {
    render(
      <form onSubmit={handleSubmit(onSubmit)}>
        <Textarea
          name="textareaTest"
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
        <Textarea
          name="textareaTest"
          label="Test Label"
          control={control}
          errors={errors}
        />
      </form>
    )
    const label = screen.getByText('Test Label')
    expect(label).toBeInTheDocument()
  })

  it('renders an textarea field', () => {
    render(
      <form onSubmit={handleSubmit(onSubmit)}>
        <Textarea
          name="textareaTest"
          placeholder="Enter some value here"
          control={control}
          errors={errors}
        />
      </form>
    )
    const textarea = screen.getByRole('textbox')
    expect(textarea).toBeInTheDocument()
  })

  const customErrors = {
    textareaTest: { message: 'This is an error message' },
  }

  it('displays error message when there is a form validation error', () => {
    render(
      <form onSubmit={handleSubmit(onSubmit)}>
        <Textarea
          name="textareaTest"
          placeholder="Enter some value here"
          control={control}
          errors={customErrors as unknown as FieldErrors<typeof initialValues>}
        />
      </form>
    )
    const errorMessage = screen.getByText(initialErrors.textareaTest)
    expect(errorMessage).toBeInTheDocument()
  })

  it('does not display error message when there is no form validation error', () => {
    render(
      <form onSubmit={handleSubmit(onSubmit)}>
        <Textarea name="textareaTest" control={control} errors={errors} />
      </form>
    )
    const errorMessage = screen.queryByText(/.+/)
    expect(errorMessage).toBeNull()
  })
})
