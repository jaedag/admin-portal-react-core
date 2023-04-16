export type Role =
  | 'leaderFellowship'
  | 'leaderBacenta'
  | 'leaderConstituency'
  | 'leaderCouncil'
  | 'leaderStream'
  | 'leaderSonta'
  | 'leaderHub'
  | 'leaderMinistry'
  | 'leaderFederalministry'
  | 'leaderGatheringService'
  | 'leaderOversight'
  | 'adminConstituency'
  | 'adminCouncil'
  | 'adminStream'
  | 'adminGatheringService'
  | 'adminOversight'
  | 'adminMinistry'
  | 'adminFederalministry'
  | 'arrivalsAdminGatheringService'
  | 'arrivalsAdminStream'
  | 'arrivalsAdminCouncil'
  | 'arrivalsAdminConstituency'
  | 'arrivalsConfirmerStream'
  | 'arrivalsCounterStream'
  | 'tellerStream'
  | 'sheepseekerStream'
  | 'all'

// CHURCHES
export type ChurchLevel =
  | 'Fellowship'
  | 'Bacenta'
  | 'Constituency'
  | 'Council'
  | 'Stream'
  | 'GatheringService'
  | 'Oversight'
  | 'Sonta'
  | 'Basonta'
  | 'Ministry'
  | 'Hub'
  | 'Federalministry'

export type ChurchLevelLower =
  | 'fellowship'
  | 'bacenta'
  | 'constituency'
  | 'council'
  | 'stream'
  | 'gatheringService'
  | 'oversight'
  | 'ministry'
  | 'hub'
  | 'sonta'
  | 'basonta'

export type CurrentUser = {
  id: string
  roles: Role[]
}
