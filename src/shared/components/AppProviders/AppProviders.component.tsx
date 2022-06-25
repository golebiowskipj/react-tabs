import React from 'react'
import { ThemeProvider } from 'ui-kit'

interface AppProvidersProps {
  children: React.ReactNode
}

export const AppProviders = ({ children }: AppProvidersProps) => {
  return <ThemeProvider>{children}</ThemeProvider>
}
