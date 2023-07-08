import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import Input, { InputProps } from './Input'
import * as Yup from 'yup'
import { FormikComponentProps } from '../formik-types'
import { FieldErrors, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

const initialValues = {
  inputTest: '',
}

const initialErrors = {
  inputTest: 'This is an error message',
}

const onSubmit = () => alert('Submitted!')

export default {
  title: 'ReactHookForm/Input',
  component: Input,
  argTypes: {
    label: { control: 'text' },
    type: { control: { type: 'select', options: ['date', 'time'] } },
  },
} as Meta

const Template: StoryFn<FormikComponentProps> = (args) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<typeof initialValues>()

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...args}
        name="inputTest"
        placeholder="Enter some value here"
        control={control}
        errors={errors}
      />
    </form>
  )
}

export const Default = Template.bind({})

export const WithLabel = Template.bind({})
WithLabel.args = {
  label: 'Test Input',
}

export const WithError = () => {
  const validationSchema = Yup.object({
    inputTest: Yup.string().required(),
  })

  const { handleSubmit, control } = useForm<typeof initialValues>({
    resolver: yupResolver(validationSchema),
    reValidateMode: 'onBlur',
  })

  const errors = {
    inputTest: { message: 'This is an error message' },
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        name="inputTest"
        placeholder="Enter some value here"
        control={control}
        errors={errors as unknown as FieldErrors<typeof initialValues>}
      />
    </form>
  )
}
