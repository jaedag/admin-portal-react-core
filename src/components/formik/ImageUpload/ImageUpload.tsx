import React, { useState, useRef, ChangeEventHandler } from 'react'
import { ErrorMessage } from 'formik'
import {
  Button,
  Center,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Image,
  Input,
} from '@chakra-ui/react'
import { BeatLoader } from 'react-spinners'
import { FormikComponentProps } from '../formik-types'

export interface ImageUploadProps extends FormikComponentProps {
  uploadPreset?: string
  tags?: 'facial-recognition'
  initialValue?: string
  loading?: boolean
  currentUser: {
    id: string
    firstName: string
    lastName: string
  }
  setFieldValue: (field: string, value: unknown) => void
}

const ImageUpload = (props: ImageUploadProps) => {
  const {
    label,
    name,
    initialValue,
    setFieldValue,
    uploadPreset,
    placeholder,
    tags,
    currentUser,
    ...rest
  } = props
  const fileInputRef = useRef<HTMLInputElement>(null)
  const handleButtonClick = () => {
    fileInputRef.current?.click()
  }
  const [loading, setLoading] = useState(false)
  const [image, setImage] = useState('')

  const uploadImage: ChangeEventHandler<HTMLInputElement> = async (e) => {
    const files = e.target.files ?? []
    const date = new Date().toISOString().slice(0, 10)
    const username = `${currentUser.firstName.toLowerCase()}-${currentUser.lastName.toLowerCase()}`
    let filename = `church-insights/${username}-${currentUser.id}/${date}_${files[0].name}`
    filename = filename.replace(/\s/g, '-')
    filename = filename.replace(/~/g, '-')
    filename = filename.replace(/[^a-zA-Z0-9-_]/g, '')

    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', uploadPreset || '')
    data.append('public_id', filename)

    data.append('tags', tags || '')

    setLoading(true)

    const res = await fetch(
      'https://api.cloudinary.com/v1_1/firstlovecenter/image/upload',
      {
        method: 'POST',
        body: data,
      }
    )
    const file = await res.json()

    setImage(file.secure_url)

    setFieldValue(`${name}`, file.secure_url)
    setLoading(false)
  }

  return (
    <FormControl>
      {label ? (
        <FormLabel textAlign="center" htmlFor={name}>
          {label}
        </FormLabel>
      ) : null}
      <Container padding={0} width="350px" height="350px" marginBottom={4}>
        <Center height="100%">
          {props.loading || loading ? (
            <BeatLoader data-testid="loading-spinner" color="grey" />
          ) : (
            <Image
              data-testid="image-loaded"
              src={image || initialValue}
              fallbackSrc="https://res.cloudinary.com/firstlovecenter/image/upload/v1683818433/placeholder350_tt6roc.png"
              rounded="md"
            />
          )}
        </Center>
      </Container>

      <Container padding={0} maxWidth="350px">
        <Input
          id={name}
          name={name}
          display="none"
          ref={fileInputRef}
          type="file"
          accept="image/png, image/webp, image/jpg, image/jpeg"
          onChange={uploadImage}
          {...rest}
        />
        <Button colorScheme="blue" width="100%" onClick={handleButtonClick}>
          Upload Image
        </Button>
      </Container>
      {!!props.error && <FormErrorMessage>{props.error}</FormErrorMessage>}
      {!props.error ?? (
        <ErrorMessage name={name} component={FormErrorMessage} />
      )}
    </FormControl>
  )
}

export default ImageUpload
