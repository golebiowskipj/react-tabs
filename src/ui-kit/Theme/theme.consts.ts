import { DefaultTheme } from 'styled-components'

export const theme: DefaultTheme = {
  color: {
    white: '#FFFFFF',
    black: '#000000',
    primary: '#6922D3',
    backgroundPrimary: '#F0E9FA',
    backgroundSecondary: '#EBECF0',
    textPrimary: '#363D65',
    textSecondary: '#5E6484',
  },
  fontFamily: {
    primary: 'Helvetica',
  },
  media: {
    minTablet: '@media(min-width: 767px)',
    minDesktop: '@media(min-width: 1200px)',
  },
  transition: '0.3s cubic-bezier(0.17, 0.67, 0.31, 1.04)',
}
