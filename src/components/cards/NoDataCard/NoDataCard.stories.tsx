import React from 'react'
import { Meta } from '@storybook/react'
import NoDataCard from './NoDataCard'

export default {
  title: 'Components/Cards/NoDataCard',
  component: NoDataCard,
} as Meta

export const Default = () => <NoDataCard />

export const WithChildren = () => (
  <NoDataCard>
    <div>Test content</div>
  </NoDataCard>
)

export const WithProps = () => (
  <NoDataCard data-testid="no-data-card" textAlign="start">
    <div>Test content</div>
  </NoDataCard>
)
