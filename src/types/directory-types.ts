export interface Member {
  __typename: 'Member'
  id: string
  // eslint-disable-next-line camelcase
  auth_id: string
  firstName: string
  middleName?: string
  lastName: string
  fullName: string
  idlLocation?: string
  location?: string
  nameWithTitle?: string
  currentTitle: TitleOptions
  titleConnection?: unknown
  email: string
  pictureUrl: string
  phoneNumber: string
  whatsappNumber: string
  dob: { date: string }
  maritalStatus: { status: 'Married' | 'Single' }
  gender: { gender: 'Male' | 'Female' }
  occupation: { occupation: string }
  fellowship: {
    id: string
    name: string
  }
  ministry: {
    id: string
    name: string
  }
}

export type TitleOptions = 'Pastor' | 'Reverend' | 'Bishop'
