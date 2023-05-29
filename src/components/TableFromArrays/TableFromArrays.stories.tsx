import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import TableFromArrays, { TableFromArraysProps } from './TableFromArrays'

export default {
  title: 'Components/TableFromArrays',
  component: TableFromArrays,
  argTypes: {
    loading: { control: 'boolean' },
  },
} as Meta

const heading = [['Field', 'Value', 'Percentage']]
const tableArray = [
  ['First Name', 'John', 0.02],
  ['Last Name', 'Doe', 0.004],
  ['Email', 'johndoe@gmail.com', 30.48],
]

const Template: StoryFn<TableFromArraysProps> = (args) => (
  <TableFromArrays {...args} />
)

export const Default = Template.bind({})
Default.args = {
  tableArray,
  loading: false,
}

export const WithHeading = Template.bind({})
WithHeading.args = {
  heading,
  tableArray,
  loading: false,
}

export const Loading = Template.bind({})
Loading.args = {
  tableArray,
  loading: true,
}

export const WithStyles = Template.bind({})
WithStyles.args = {
  tableArray,
  loading: false,
  variant: 'striped',
  colorScheme: 'teal',
  tdStyle: {
    col: 2,
    style: {
      color: 'red',
      isNumeric: true,
    },
  },
}
