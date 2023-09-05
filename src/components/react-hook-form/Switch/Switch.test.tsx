import React from 'react'
import { render, screen } from '@testing-library/react'
import Switch from './Switch'
import '@testing-library/jest-dom'
import { FieldErrors, useForm } from 'react-hook-form'

const initialValues = {
  switchTest: '',
}

const initialErrors = {
  switchTest: 'Initial Switch',
}

const onSubmit = () => alert('Submitted!')

describe('Switch Component', () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<typeof initialValues>()

  it('renders without crashing', () => {
    render(
      <form onSubmit={handleSubmit(onSubmit)}>
        <Switch
          name="switchTest"
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
        <Switch
          name="switchTest"
          label="Test Label"
          control={control}
          errors={errors}
        />
      </form>
    )
    const label = screen.getByText('Test Label')
    expect(label).toBeInTheDocument()
  })

  const customErrors = {
    switchTest: { message: 'This is an error message' },
  }

  it('displays error message when there is a form validation error', () => {
    render(
      <form onSubmit={handleSubmit(onSubmit)}>
        <Switch
          name="switchTest"
          placeholder="Enter some value here"
          control={control}
          errors={customErrors as unknown as FieldErrors<typeof initialValues>}
        />
      </form>
    )
    const errorMessage = screen.getByText(initialErrors.switchTest)
    expect(errorMessage).toBeInTheDocument()
  })

  it('does not display error message when there is no form validation error', () => {
    render(
      <form onSubmit={handleSubmit(onSubmit)}>
        <Switch name="switchTest" control={control} errors={errors} />
      </form>
    )
    const errorMessage = screen.queryByText(/.+/)
    expect(errorMessage).toBeNull()
  })
})
