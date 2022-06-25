import { ReactNode } from 'react'
import { QueryClientProvider, QueryClient } from 'react-query'

interface ReactQueryProviderProps {
  children: ReactNode
  queryClient: QueryClient
}

export const ReactQueryProvider = (props: ReactQueryProviderProps) => {
  const { children, queryClient } = props

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
