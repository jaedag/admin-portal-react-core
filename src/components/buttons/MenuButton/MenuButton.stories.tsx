import React from 'react'
import { Meta } from '@storybook/react'
import { AiOutlineUser } from 'react-icons/ai'
import MenuButton from './MenuButton'

export default {
  title: 'Components/Buttons/MenuButton',
  component: MenuButton,
} as Meta

export const Default = () => (
  <MenuButton
    icon={AiOutlineUser}
    color="blue.200"
    title="Members"
    onClick={() => console.log('Clicked')}
  />
)

export const WithSubtitle = () => (
  <MenuButton
    icon={AiOutlineUser}
    color="green.200"
    title="Churches"
    subtitle="Button subtitle"
    onClick={() => console.log('Clicked')}
  />
)
