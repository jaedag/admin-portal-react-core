import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import Input from './Input'
import * as Yup from 'yup'
import { FieldErrors, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { ReactHookFormComponentProps } from '../react-hook-form-types'

const initialValues = {
  inputTest: '',
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

const Template: StoryFn<ReactHookFormComponentProps> = (args) => {
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
