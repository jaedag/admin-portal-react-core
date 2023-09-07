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

export const WithLongNumber = () => (
  <NumberButton
    number={40000}
    color="blue.200"
    title="Members"
    onClick={() => console.log('Clicked')}
  />
)

export const WithUndefinedNumber = () => (
  <NumberButton
    number={undefined}
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
    onClick={() => console.log('Clicked')}
  />
)

export const WithStyleProps = () => (
  <NumberButton
    number={2}
    colorScheme="red"
    title="Members"
    onClick={() => console.log('Clicked')}
  />
)
