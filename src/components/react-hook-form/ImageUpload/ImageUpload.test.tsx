import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import ImageUpload, { ImageUploadProps } from './ImageUpload'
import '@testing-library/jest-dom'

describe('ImageUpload', () => {
  const defaultProps: ImageUploadProps = {
    name: 'image',
    label: 'Upload an image',
    user: { id: '1', firstName: 'John', lastName: 'Doe' },
    setFieldValue: jest.fn(),
  }

  it('renders the label text', () => {
    render(<ImageUpload {...defaultProps} />)
    expect(screen.getByText('Upload an image')).toBeInTheDocument()
  })

  it('displays a loading spinner while the image is uploading', async () => {
    const { getByTestId, getByLabelText } = render(
      <ImageUpload {...defaultProps} loading={true} />
    )

    expect(getByTestId('loading-spinner')).toBeInTheDocument()
  })
})
