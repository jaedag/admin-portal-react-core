import React from 'react'
import { Meta } from '@storybook/react'
import RoleCard from './RoleCard'

export default {
  title: 'Components/RoleCard',
  component: RoleCard,
} as Meta

export const Default = () => <RoleCard number={1} role="leaderFellowship" />

export const FellowshipLeader = () => (
  <RoleCard number={2} role="leaderFellowship" />
)

export const ArrivalsCounter = () => (
  <RoleCard number={2} role="arrivalsCounterStream" />
)
