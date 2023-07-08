import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'
import userEvent from '@testing-library/user-event'
import SubmitButton, { SubmitButtonProps } from './SubmitButton'
import { FormikProps } from 'formik'

describe('SubmitButton', () => {
  const formikMock: SubmitButtonProps['formik'] = {
    // Mock Formik props as needed
    isSubmitting: false,
  } as FormikProps<unknown>

  it('renders the button with default text', () => {
    render(<SubmitButton formik={formikMock} />)

    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument()
  })

  it('renders the button with custom text', () => {
    const customText = 'Click me'
    render(<SubmitButton formik={formikMock}>{customText}</SubmitButton>)

    expect(screen.getByRole('button', { name: customText })).toBeInTheDocument()
  })

  it('displays loading state when formik.isSubmitting is true', () => {
    const formikSubmittingMock: SubmitButtonProps['formik'] = {
      ...formikMock,
      isSubmitting: true,
    }
    render(<SubmitButton formik={formikSubmittingMock} />)

    expect(screen.getByRole('status')).toBeInTheDocument()
  })
})
