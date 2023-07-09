import React from 'react'
import { Meta, Story, StoryFn } from '@storybook/react'
import Select, { RHFSelectProps } from './Select'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Button } from '@chakra-ui/react'
import { FieldErrors, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

export default {
  title: 'ReactHookForm/Select',
  component: Select,
} as Meta

const initialValues = {
  testSelect: '',
}
const onSubmit = () => alert('Submitted!')

const options = [
  { key: 'Option 1', value: 'option1' },
  { key: 'Option 2', value: 'option2' },
  { key: 'Option 3', value: 'option3' },
]

const Template: StoryFn<RHFSelectProps> = (args) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<typeof initialValues>()

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Select
        {...args}
        name="testSelect"
        control={control}
        errors={errors}
        options={options}
      />
      <Button type="submit">Submit</Button>
    </form>
  )
}

export const Default = Template.bind({})

export const WithLabel = Template.bind({})
WithLabel.args = {
  label: 'Test Select',
}

export const WithDefaultOption = Template.bind({})
WithDefaultOption.args = {
  defaultOption: 'Select an option',
}

export const WithError = () => {
  const validationSchema = Yup.object({
    testSelect: Yup.string().required(),
  })

  const { handleSubmit, control } = useForm<typeof initialValues>({
    resolver: yupResolver(validationSchema),
    reValidateMode: 'onBlur',
  })

  const errors = {
    testSelect: { message: 'This is an error message' },
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Select
        name="testSelect"
        control={control}
        errors={errors as unknown as FieldErrors<typeof initialValues>}
        options={options}
      />
      <Button type="submit">Submit</Button>
    </form>
  )
}
