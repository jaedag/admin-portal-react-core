import { Role } from '../types/roles'

export const isAuthorised = (permittedRoles: Role[], userRoles: Role[]) => {
  if (permittedRoles.includes('all')) {
    return true
  }

  return permittedRoles?.some((r) => userRoles.includes(r))
}
