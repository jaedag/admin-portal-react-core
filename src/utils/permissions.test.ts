import { permitLeader, permitAdmin } from './permissions'

describe('permitLeader function', () => {
  it('should return permitted roles for fellowship', () => {
    expect(permitLeader('Fellowship')).toEqual([
      'leaderOversight',
      'leaderGatheringService',
      'leaderStream',
      'leaderCouncil',
      'leaderConstituency',
      'leaderBacenta',
      'leaderFellowship',
    ])
  })

  it('should return permitted roles for bacenta', () => {
    expect(permitLeader('Bacenta')).toEqual([
      'leaderOversight',
      'leaderGatheringService',
      'leaderStream',
      'leaderCouncil',
      'leaderConstituency',
      'leaderBacenta',
    ])
  })

  it('should return permitted roles for sonta', () => {
    expect(permitLeader('Sonta')).toEqual([
      'leaderGatheringService',
      'leaderStream',
      'leaderSonta',
      'leaderHub',
      'leaderMinistry',
      'leaderFederalministry',
    ])
  })

  it('should return permitted roles for hub', () => {
    expect(permitLeader('Hub')).toEqual([
      'leaderGatheringService',
      'leaderStream',
      'leaderHub',
      'leaderMinistry',
      'leaderFederalministry',
    ])
  })

  it('should return permitted roles for ministry', () => {
    expect(permitLeader('Ministry')).toEqual([
      'leaderGatheringService',
      'leaderStream',
      'leaderMinistry',
      'leaderFederalministry',
    ])
  })

  it('should return permitted roles for federalministry', () => {
    expect(permitLeader('Federalministry')).toEqual([
      'leaderGatheringService',
      'leaderFederalministry',
    ])
  })

  it('should return permitted roles for constituency', () => {
    expect(permitLeader('Constituency')).toEqual([
      'leaderOversight',
      'leaderGatheringService',
      'leaderStream',
      'leaderCouncil',
      'leaderConstituency',
    ])
  })

  it('should return permitted roles for council', () => {
    expect(permitLeader('Council')).toEqual([
      'leaderOversight',
      'leaderGatheringService',
      'leaderStream',
      'leaderCouncil',
    ])
  })

  it('should return permitted roles for stream', () => {
    expect(permitLeader('Stream')).toEqual([
      'leaderOversight',
      'leaderGatheringService',
      'leaderStream',
    ])
  })

  it('should return permitted roles for gatheringservice', () => {
    expect(permitLeader('GatheringService')).toEqual([
      'leaderOversight',
      'leaderGatheringService',
    ])
  })

  it('should return permitted roles for oversight', () => {
    expect(permitLeader('Oversight')).toEqual(['leaderOversight'])
  })
})

describe('permitAdmin', () => {
  it('should return permitted roles for Fellowship level', () => {
    const churchLevel = 'Fellowship'
    const permittedRoles = permitAdmin(churchLevel)
    expect(permittedRoles).toEqual([
      'adminOversight',
      'adminGatheringService',
      'adminStream',
      'adminCouncil',
      'adminConstituency',
    ])
  })

  it('should return permitted roles for Bacenta level', () => {
    const churchLevel = 'Bacenta'
    const permittedRoles = permitAdmin(churchLevel)
    expect(permittedRoles).toEqual([
      'adminOversight',
      'adminGatheringService',
      'adminStream',
      'adminCouncil',
      'adminConstituency',
    ])
  })

  it('should return permitted roles for Sonta level', () => {
    const churchLevel = 'Sonta'
    const permittedRoles = permitAdmin(churchLevel)
    expect(permittedRoles).toEqual([
      'adminOversight',
      'adminGatheringService',
      'adminStream',
      'adminCouncil',
      'adminConstituency',
    ])
  })

  it('should return permitted roles for Hub level', () => {
    const churchLevel = 'Hub'
    const permittedRoles = permitAdmin(churchLevel)
    expect(permittedRoles).toEqual([
      'adminOversight',
      'adminGatheringService',
      'adminStream',
      'adminCouncil',
      'adminConstituency',
    ])
  })

  it('should return permitted roles for Constituency level', () => {
    const churchLevel = 'Constituency'
    const permittedRoles = permitAdmin(churchLevel)
    expect(permittedRoles).toEqual([
      'adminOversight',
      'adminGatheringService',
      'adminStream',
      'adminCouncil',
      'adminConstituency',
    ])
  })

  it('should return permitted roles for Ministry level', () => {
    const churchLevel = 'Ministry'
    const permittedRoles = permitAdmin(churchLevel)
    expect(permittedRoles).toEqual([
      'adminGatheringService',
      'adminStream',
      'adminMinistry',
      'adminFederalministry',
    ])
  })

  it('should return permitted roles for Federalministry level', () => {
    const churchLevel = 'Federalministry'
    const permittedRoles = permitAdmin(churchLevel)
    expect(permittedRoles).toEqual([
      'adminGatheringService',
      'adminStream',
      'adminFederalministry',
    ])
  })

  it('should return permitted roles for Council level', () => {
    const churchLevel = 'Council'
    const permittedRoles = permitAdmin(churchLevel)
    expect(permittedRoles).toEqual([
      'adminOversight',
      'adminGatheringService',
      'adminStream',
      'adminCouncil',
    ])
  })

  it('should return permitted roles for Stream level', () => {
    const churchLevel = 'Stream'
    const permittedRoles = permitAdmin(churchLevel)
    expect(permittedRoles).toEqual([
      'adminOversight',
      'adminGatheringService',
      'adminStream',
    ])
  })

  it('should return permitted roles for GatheringService level', () => {
    const churchLevel = 'GatheringService'
    const permittedRoles = permitAdmin(churchLevel)
    expect(permittedRoles).toEqual(['adminOversight', 'adminGatheringService'])
  })
})
