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
  fellowship: Church
  ministry: Church | null
}

export type TitleOptions = 'Pastor' | 'Reverend' | 'Bishop'

export type ChurchLevel =
  | 'Fellowship'
  | 'Bacenta'
  | 'Constituency'
  | 'Council'
  | 'Stream'
  | 'Campus'
  | 'GatheringService'
  | 'Oversight'
  | 'Sonta'
  | 'Basonta'
  | 'Ministry'
  | 'Hub'
  | 'Federalministry'

export interface Church {
  id: string
  name: string
  levelName: string
  leader: {
    id: string
    firstName: string
    lastName: string
    fullName: string
    currentTitle: 'Pastor' | 'Reverend' | 'Bishop'
    nameWithTitle: string
    phoneNumber: string
    whatsappNumber: string
    pictureUrl: string
  }
  vacationStatus?: 'Vacation' | 'Active'
  __typename: ChurchLevel
}
