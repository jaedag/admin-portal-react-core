import React from 'react'
import CurrencySpan, { CurrencySpanProps } from './CurrencySpan'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'Components/CurrencySpan',
  component: CurrencySpan,
} as Meta

const Template: StoryFn<CurrencySpanProps> = (args) => (
  <CurrencySpan {...args} />
)

export const PositiveNumber = Template.bind({})
PositiveNumber.args = {
  number: 100,
}

export const ZeroNumber = Template.bind({})
ZeroNumber.args = {
  number: 0,
}

export const NegativeNumber = Template.bind({})
NegativeNumber.args = {
  number: -50,
}

export const NullNumber = Template.bind({})
NullNumber.args = {
  number: null,
}

export const WithStyles = Template.bind({})
WithStyles.args = {
  number: 10,
  color: 'green',
  fontWeight: 'bold',
}
