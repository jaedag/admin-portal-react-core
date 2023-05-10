import React from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Formik, Form } from 'formik'
import Select, { FormikSelectProps } from './Select'
import '@testing-library/jest-dom'

const initialValues = {
  testSelect: '',
}
const onSubmit = () => alert('Submitted!')

const options = [
  { key: 'Option 1', value: 'option-1' },
  { key: 'Option 2', value: 'option-2' },
  { key: 'Option 3', value: 'option-3' },
]

const defaultProps: FormikSelectProps = {
  label: 'Select an option',
  name: 'selectOption',
  options,
}

describe('Select component', () => {
  it('should render with label', () => {
    const { getByText } = render(
      <Formik initialValues={initialValues} onSubmit={() => {}}>
        <Form>
          <Select {...defaultProps} />
        </Form>
      </Formik>
    )

    expect(getByText('Select an option')).toBeInTheDocument()
  })

  it('should render with options', () => {
    const { getByText } = render(
      <Formik initialValues={initialValues} onSubmit={() => {}}>
        <Form>
          <Select {...defaultProps} />
        </Form>
      </Formik>
    )

    options.forEach((option) => {
      expect(getByText(option.key)).toBeInTheDocument()
    })
  })

  it('should render with default option', () => {
    const { getByText } = render(
      <Formik initialValues={initialValues} onSubmit={() => {}}>
        <Form>
          <Select {...defaultProps} />
        </Form>
      </Formik>
    )

    expect(getByText('Select an option')).toBeInTheDocument()
  })

  it('should show error message when formik field is invalid', async () => {
    const { getByText } = render(
      <Formik initialValues={initialValues} onSubmit={() => {}}>
        {({ setFieldError }) => (
          <Form>
            <Select {...defaultProps} />
            <button
              type="button"
              onClick={() =>
                setFieldError('selectOption', 'You Must Select An Option!')
              }
            >
              Set Error
            </button>
          </Form>
        )}
      </Formik>
    )

    const setErrorButton = getByText('Set Error')
    userEvent.click(setErrorButton)
    expect(getByText('You Must Select An Option!')).toBeInTheDocument()
  })
})
