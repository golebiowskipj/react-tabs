import React from 'react'
import { QueryClient } from 'react-query'
import { ThemeProvider } from 'ui-kit'
import { ReactQueryProvider } from '../ReactQuery/ReactQueryProvider.component'

interface AppProvidersProps {
  children: React.ReactNode
  queryClient: QueryClient
}

export const AppProviders = ({ children, queryClient }: AppProvidersProps) => {
  return (
    <ReactQueryProvider queryClient={queryClient}>
      <ThemeProvider>{children}</ThemeProvider>
    </ReactQueryProvider>
  )
}
