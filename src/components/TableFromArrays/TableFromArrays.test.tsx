import React from 'react'
import { render } from '@testing-library/react'
import TableFromArrays from './TableFromArrays'

describe('TableFromArrays', () => {
  const tableArray = [
    ['John', 'Doe', 'john.doe@example.com'],
    ['Jane', 'Smith', 'jane.smith@example.com'],
  ]

  it('matches snapshot when loading is false', () => {
    const { container } = render(
      <TableFromArrays tableArray={tableArray} loading={false} />
    )

    expect(container).toMatchSnapshot()
  })

  it('matches snapshot when loading is true', () => {
    const { container } = render(
      <TableFromArrays tableArray={tableArray} loading={true} />
    )

    expect(container).toMatchSnapshot()
  })
})
