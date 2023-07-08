import React from 'react'
import { Meta, Story, StoryFn } from '@storybook/react'
import Select, { FormikSelectProps } from './Select'
import { Formik, Form } from 'formik'
import { Button } from '@chakra-ui/react'

export default {
  title: 'Formik/Select',
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

const Template: StoryFn<FormikSelectProps> = (args) => (
  <Formik initialValues={initialValues} onSubmit={onSubmit}>
    {(formik) => (
      <Form>
        <Select {...args} name="testSelect" options={options} />
        <Button type="submit">Submit</Button>
      </Form>
    )}
  </Formik>
)

export const Default = Template.bind({})

export const WithLabel = Template.bind({})
WithLabel.args = {
  label: 'Test Select',
}

export const WithDefaultOption = Template.bind({})
WithDefaultOption.args = {
  defaultOption: 'Select an option',
}

export const WithError = Template.bind({})
WithError.parameters = {
  controls: { hideNoControlsWarning: true },
}

WithError.argTypes = {
  options: { table: { disable: true } },
}
WithError.decorators = [
  (Story) => (
    <Formik
      initialValues={{ testSelect: '' }}
      onSubmit={() => alert('Submitted!')}
      isInitialValid={false}
      initialErrors={{ testSelect: 'Please select an option' }}
      validateOnMount
    >
      {(formik) => (
        <Form>
          <Story {...formik} />
        </Form>
      )}
    </Formik>
  ),
]
