import { StoryFn } from '@storybook/react'
import { Formik, FormikProps } from 'formik'
import React from 'react'
import SubmitButton, { SubmitButtonProps } from './SubmitButton'

export default {
  title: 'Formik/SubmitButton',
  component: SubmitButton,
}

// Template for passing Formik props
const Template: StoryFn<SubmitButtonProps> = (args) => (
  <Formik initialValues={{}} onSubmit={() => {}}>
    {() => <SubmitButton {...args} />}
  </Formik>
)

// Default story
export const Default = Template.bind({})
Default.args = {
  formik: {
    values: {},
    errors: {},
    touched: {},
    isValidating: false,
    submitCount: 0,
    isSubmitting: false,
  } as FormikProps<unknown>,
}

// Story with custom text
export const WithCustomText = Template.bind({})
WithCustomText.args = {
  formik: {
    values: {},
    errors: {},
    touched: {},
    isValidating: false,
    submitCount: 0,
    isSubmitting: false,
  } as FormikProps<unknown>,
  children: 'Click me',
}

export const Loading = Template.bind({})
Loading.args = {
  formik: {
    values: {},
    errors: {},
    touched: {},
    isValidating: false,
    submitCount: 0,
    isSubmitting: true,
  } as FormikProps<unknown>,
}
