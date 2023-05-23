import { FormikSelectOptions } from '@/components/formik/formik-types'

export const GH_MOBILE_NETWORK_OPTIONS: FormikSelectOptions = [
  { key: 'MTN', value: 'MTN' },
  { key: 'Vodafone', value: 'Vodafone' },
  { key: 'AirtelTigo', value: 'AirtelTigo' },
]

export type streamAccountType =
  | 'aes_account'
  | 'ges_account'
  | 'hge_account'
  | 'fle_account'
  | 'manual'

export const STREAM_ACCOUNT_OPTIONS: {
  key: string
  value: streamAccountType
}[] = [
  { key: 'Manual Finances', value: 'manual' },
  { key: 'FLE Account', value: 'fle_account' },
  { key: 'AES Account', value: 'aes_account' },
  { key: 'GES Account', value: 'ges_account' },
  { key: 'HGE Account', value: 'hge_account' },
]
