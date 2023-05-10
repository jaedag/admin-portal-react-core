import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import Input, { InputProps } from './Input'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { FormikComponentProps } from '../formik-types'

const initialValues = {
  inputTest: '',
}

const initialErrors = {
  inputTest: 'This is an error message',
}

const onSubmit = () => alert('Submitted!')

export default {
  title: 'Formik/Input',
  component: Input,
  argTypes: {
    label: { control: 'text' },
    type: { control: { type: 'select', options: ['date', 'time'] } },
  },
} as Meta

const Template: StoryFn<FormikComponentProps> = (args) => (
  <Formik
    initialValues={initialValues}
    validationSchema={Yup.object({
      inputTest: Yup.string().required('This is a required field'),
    })}
    onSubmit={onSubmit}
  >
    {() => (
      <Input {...args} name="inputTest" placeholder="Enter some value here" />
    )}
  </Formik>
)

export const Default = Template.bind({})

export const WithLabel = Template.bind({})
WithLabel.args = {
  label: 'Test Input',
}

export const WithError = () => (
  <Formik
    initialValues={initialValues}
    onSubmit={onSubmit}
    isInitialValid={false}
    initialErrors={initialErrors}
  >
    {(formik) => {
      console.log('formik.errors', formik.errors)
      return <Input name="inputTest" placeholder="Enter some value here" />
    }}
  </Formik>
)
