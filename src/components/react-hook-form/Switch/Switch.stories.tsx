import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import Switch from './Switch'
import * as Yup from 'yup'
import { FieldErrors, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { ReactHookFormComponentProps } from '../react-hook-form-types'

const initialValues = {
  switchTest: '',
}

const onSubmit = () => alert('Submitted!')

export default {
  title: 'ReactHookForm/Switch',
  component: Switch,
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
      <Switch
        {...args}
        name="switchTest"
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
  label: 'Test Switch',
}

export const WithError = () => {
  const validationSchema = Yup.object({
    switchTest: Yup.string().required(),
  })

  const { handleSubmit, control } = useForm<typeof initialValues>({
    resolver: yupResolver(validationSchema),
    reValidateMode: 'onBlur',
  })

  const errors = {
    switchTest: { message: 'This is an error message' },
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Switch
        name="switchTest"
        placeholder="Enter some value here"
        control={control}
        errors={errors as unknown as FieldErrors<typeof initialValues>}
      />
    </form>
  )
}
