export const isTokenExpired = (expiryDate: string | null) => {
  if (expiryDate) {
    const now = new Date()
    const expiry = new Date(expiryDate)
    return now > expiry
  }

  return true
}
