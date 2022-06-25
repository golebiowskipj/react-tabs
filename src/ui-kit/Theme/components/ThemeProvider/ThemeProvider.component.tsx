import React from 'react'
import { ThemeProvider as ThemeProviderStyled } from 'styled-components'
import { theme } from '../../theme.consts'
import { GlobalStyles } from '../GlobalStyles/GlobalStyles.styles'
import { ResetStyles } from '../ResetStyles/ResetStyles.styles'

interface ThemeProps {
  children: React.ReactNode
}

export const ThemeProvider = ({ children }: ThemeProps) => {
  return (
    <>
      <ResetStyles />
      <GlobalStyles />
      <ThemeProviderStyled theme={theme}>{children}</ThemeProviderStyled>
    </>
  )
}
