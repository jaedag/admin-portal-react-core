import React from 'react'
import { Meta } from '@storybook/react'
import { AiOutlineUser } from 'react-icons/ai'
import NumberButton from './NumberButton'

export default {
  title: 'Components/Buttons/NumberButton',
  component: NumberButton,
} as Meta

export const Default = () => (
  <NumberButton
    number={98}
    color="blue.200"
    title="Members"
    onClick={() => console.log('Clicked')}
  />
)

export const LongNumber = () => (
  <NumberButton
    number={40000}
    color="blue.200"
    title="Members"
    onClick={() => console.log('Clicked')}
  />
)

export const WithSubtitle = () => (
  <NumberButton
    number={400}
    color="green.200"
    title="Churches"
    subtitle="Button subtitle"
    onClick={() => console.log('Clicked')}
  />
)
