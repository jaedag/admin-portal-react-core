import { SelectOptions } from '@/components/react-hook-form/react-hook-form-types'
import { streamAccountType } from '@jaedag/admin-portal-types'

export const GH_MOBILE_NETWORK_OPTIONS: SelectOptions = [
  { key: 'MTN', value: 'MTN' },
  { key: 'Vodafone', value: 'Vodafone' },
  { key: 'AirtelTigo', value: 'AirtelTigo' },
]

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
