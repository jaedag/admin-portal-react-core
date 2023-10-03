import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import SubmitButton, { SubmitButtonProps } from './SubmitButton'

export default {
  title: 'ReactHookForm/SubmitButton',
  component: SubmitButton,
} as Meta

const Template: StoryFn<SubmitButtonProps> = (args) => (
  <SubmitButton {...args} />
)

export const Default = Template.bind({})
Default.args = {
  isSubmitting: false,
}

export const Loading = Template.bind({})
Loading.args = {
  isSubmitting: true,
}

export const CustomColor = Template.bind({})
CustomColor.args = {
  isSubmitting: false,
  colorScheme: 'purple',
}

export const CustomText = Template.bind({})
CustomText.args = {
  isSubmitting: false,
  children: 'Save Changes',
}
