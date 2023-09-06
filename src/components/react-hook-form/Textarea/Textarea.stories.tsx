import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import Textarea from './Textarea'
import * as Yup from 'yup'
import { FieldErrors, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { ReactHookFormComponentProps } from '../react-hook-form-types'

const initialValues = {
  textareaTest: '',
}

const onSubmit = () => alert('Submitted!')

export default {
  title: 'ReactHookForm/Textarea',
  component: Textarea,
  argTypes: {
    label: { control: 'text' },
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
      <Textarea
        {...args}
        name="textareaTest"
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
  label: 'Test Textarea',
}

export const WithError = () => {
  const validationSchema = Yup.object({
    textareaTest: Yup.string().required(),
  })

  const { handleSubmit, control } = useForm<typeof initialValues>({
    resolver: yupResolver(validationSchema),
    reValidateMode: 'onBlur',
  })

  const errors = {
    textareaTest: { message: 'This is an error message' },
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Textarea
        name="textareaTest"
        placeholder="Enter some value here"
        control={control}
        errors={errors as unknown as FieldErrors<typeof initialValues>}
      />
    </form>
  )
}
