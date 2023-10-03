import { ChurchLevel } from '@jaedag/admin-portal-types'

export const ChurchLevelColor: {
  // eslint-disable-next-line no-unused-vars
  [key in ChurchLevel]: string
} = {
  Denomination: 'grey',
  Oversight: 'facebook',
  Campus: 'green',
  Stream: 'pink',
  Constituency: 'yellow',
  Bacenta: 'blue',
  Council: 'purple',
  Fellowship: 'red',
  CreativeArts: 'orange',
  Ministry: 'teal',
  Hub: 'violet',
  HubFellowship: 'red',
}

export const getChurchLevelColor = (churchLevel: ChurchLevel) => {
  return ChurchLevelColor[churchLevel]
}
