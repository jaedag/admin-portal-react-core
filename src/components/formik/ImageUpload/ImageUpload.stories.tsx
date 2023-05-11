import React from 'react'
import { Story, Meta, StoryFn } from '@storybook/react'
import { Formik, Form } from 'formik'
import ImageUpload, { ImageUploadProps } from './ImageUpload'
import { Center, Container } from '@chakra-ui/react'

export default {
  title: 'Formik/ImageUpload',
  component: ImageUpload,
  args: {
    label: 'Image Upload',
    name: 'image',
    user: {
      id: '123',
      firstName: 'John',
      lastName: 'Doe',
    },
    setFieldValue: () => {},
  },
} as Meta

const Template: StoryFn<ImageUploadProps> = (args) => (
  <Formik initialValues={{}} onSubmit={() => {}}>
    <Form>
      <Container>
        <ImageUpload {...args} />
      </Container>
    </Form>
  </Formik>
)

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
