// theme.ts

// 1. import `extendTheme` function
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const colors = {
  brand: {
    100: '#7f50ba',
    200: '#7f50ba',
    300: '#7f50ba',
    400: '#7f50ba',
    500: '#7f50ba',
    600: '#7f50ba',
    700: '#7f50ba',
    800: '#7f50ba',
    900: '#7f50ba',
  },
  light: {
    text: {
      secondary: '#2A2A2A',
    },
    brand: {
      purple: '#611ABB',
      red: '#a53c35',
    },
    bg: '#e6e9ef',
  },
  dark: {
    text: {
      secondary: '#D6D6D6',
    },
    brand: {
      purple: '#7f50ba',
      red: '#a53c35',
    },
    bg: '#2d2e3e',
  },
}

// 3. extend the theme
const theme = extendTheme({ config, colors })

export default theme
