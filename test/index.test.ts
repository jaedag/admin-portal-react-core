import { isAuthorised } from '../src/utils/auth'
import { Role } from '../src/types/roles'

describe('isAuthorised', () => {
  test('should return true if permittedRoles includes "all"', () => {
    const permittedRoles: Role[] = ['all']
    const userRoles: Role[] = ['leaderFellowship']
    expect(isAuthorised(permittedRoles, userRoles)).toBe(true)
  })

  test('should return true if any of the permittedRoles match userRoles', () => {
    const permittedRoles: Role[] = ['leaderFellowship', 'adminConstituency']
    const userRoles: Role[] = ['leaderBacenta', 'adminConstituency']
    expect(isAuthorised(permittedRoles, userRoles)).toBe(true)
  })

  test('should return false if none of the permittedRoles match userRoles', () => {
    const permittedRoles: Role[] = ['leaderFellowship', 'adminConstituency']
    const userRoles: Role[] = ['leaderCouncil']
    expect(isAuthorised(permittedRoles, userRoles)).toBe(false)
  })

  test('should return false if permittedRoles is  empty', () => {
    const permittedRoles: Role[] = []
    const userRoles: Role[] = ['leaderFellowship']
    expect(isAuthorised(permittedRoles, userRoles)).toBe(false)
  })

  test('should return false if userRoles is  empty', () => {
    const permittedRoles: Role[] = ['leaderFellowship']
    const userRoles: Role[] = []
    expect(isAuthorised(permittedRoles, userRoles)).toBe(false)
  })
})
