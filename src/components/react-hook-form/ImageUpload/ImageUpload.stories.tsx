import React from 'react'
import { Story, Meta, StoryFn } from '@storybook/react'
import { Formik, Form } from 'formik'
import ImageUpload, { ImageUploadProps } from './ImageUpload'
import { Center, Container } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

export default {
  title: 'ReactHookForm/ImageUpload',
  component: ImageUpload,
  args: {
    label: 'Image Upload',
    name: 'image',
    user: {
      id: '123',
      firstName: 'John',
      lastName: 'Doe',
    },
    setValue: () => {},
  },
} as Meta

const initialValues = {
  image: '',
}

const onSubmit = () => alert('Submitted!')

const Template: StoryFn<ImageUploadProps> = (args) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<typeof initialValues>()

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <ImageUpload {...args} name="image" control={control} errors={errors} />
      </Container>
    </form>
  )
}

export const Default = Template.bind({})
Default.args = {}

export const WithImage = Template.bind({})
WithImage.args = {
  initialValue: 'https://picsum.photos/id/237/350/350',
}

export const Loading = Template.bind({})
Loading.args = {
  loading: true,
}
