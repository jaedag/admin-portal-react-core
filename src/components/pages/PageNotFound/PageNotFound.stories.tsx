import React from 'react'
import { Story, Meta } from '@storybook/react'
import { MemoryRouter } from 'react-router'
import PageNotFound from './PageNotFound'

export default {
  title: 'Pages/PageNotFound',
  component: PageNotFound,
} as Meta

export const Default = () => (
  <MemoryRouter>
    <PageNotFound />
  </MemoryRouter>
)
