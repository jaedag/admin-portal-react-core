import React from 'react'
import { render, screen } from '@testing-library/react'
import Input from './Input'
import '@testing-library/jest-dom'
import { Formik } from 'formik'

const initialValues = {
  inputTest: '',
}

const initialErrors = {
  inputTest: 'Initial Input',
}

const onSubmit = () => alert('Submitted!')

describe('Input Component', () => {
  it('renders without crashing', () => {
    render(
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Input
          name="inputTest"
          placeholder="Input Test"
          aria-describedby="inputTest"
        />
      </Formik>
    )
  })

  it('renders a label when passed a label prop', () => {
    render(
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Input name="inputTest" label="Test Label" />
      </Formik>
    )
    const label = screen.getByText('Test Label')
    expect(label).toBeInTheDocument()
  })

  it('renders an input field', () => {
    render(
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Input name="inputTest" />
      </Formik>
    )
    const input = screen.getByRole('textbox')
    expect(input).toBeInTheDocument()
  })

  it('displays error message when there is a form validation error', () => {
    render(
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        initialTouched={true}
        initialErrors={initialErrors}
        validateOnMount
      >
        <Input name="inputTest" />
      </Formik>
    )
    const errorMessage = screen.getByText(initialErrors.inputTest)
    expect(errorMessage).toBeInTheDocument()
  })

  it('does not display error message when there is no form validation error', () => {
    render(
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Input name="inputTest" />
      </Formik>
    )
    const errorMessage = screen.queryByText(/.+/)
    expect(errorMessage).toBeNull()
  })
})
