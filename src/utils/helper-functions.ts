export const capitalise = (str: string) => {
  switch (str) {
    case 'first love experience':
      return 'First Love Experience'
    case 'gospel encounter':
      return 'Gospel Encounter'
    case 'holy ghost encounter':
      return 'Holy Ghost Encounter'
    case 'anagkazo encounter':
      return 'Anagkazo Encounter'
    default:
      return str?.charAt(0).toUpperCase() + str?.slice(1)
  }
}

export const getCloudinaryPreset = (url: string) => {
  if (!url) return ''

  return url.replace(
    'https://res.cloudinary.com/firstlovecenter/image/upload/',
    'https://res.cloudinary.com/firstlovecenter/image/upload/c_thumb,g_face,h_150,w_150,z_0.7/'
  )
}
