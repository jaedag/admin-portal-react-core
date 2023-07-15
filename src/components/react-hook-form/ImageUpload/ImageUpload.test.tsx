import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import ImageUpload, { ImageUploadProps } from './ImageUpload'
import '@testing-library/jest-dom'
import { Control, FieldErrors, useForm } from 'react-hook-form'

const initialValues = {
  image: '',
}

const onSubmit = () => alert('Submitted!')

describe('ImageUpload', () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<typeof initialValues>()

  const defaultProps: ImageUploadProps = {
    name: 'image',
    label: 'Upload an image',
    uploadPreset: 'developer-tests',
    cloudinaryAccount: 'church-insights',
    control: { control } as unknown as Control<any>,
    errors: { errors } as FieldErrors<any>,
    user: { id: '1', firstName: 'John', lastName: 'Doe' },
    setValue: jest.fn(),
  }

  it('renders the label text', () => {
    render(
      <form onSubmit={handleSubmit(onSubmit)}>
        <ImageUpload {...defaultProps} />
      </form>
    )
    expect(screen.getByText('Upload an image')).toBeInTheDocument()
  })

  it('displays a loading spinner while the image is uploading', async () => {
    const { getByTestId, getByLabelText } = render(
      <form onSubmit={handleSubmit(onSubmit)}>
        <ImageUpload {...defaultProps} loading={true} />
      </form>
    )

    expect(getByTestId('loading-spinner')).toBeInTheDocument()
  })
})
