import { CurrentUser, Role } from '../types/roles'

export const isAuthorised = (permittedRoles: Role[], userRoles: Role[]) => {
  if (permittedRoles.includes('all')) {
    return true
  }

  return permittedRoles?.some((r) => userRoles.includes(r))
}

export const authorisedLink = (
  currentUser: CurrentUser,
  permittedRoles: Role[],
  link: string
): string => {
  if (isAuthorised(permittedRoles, currentUser?.roles || [])) {
    return link
  }
  return '#'
}
