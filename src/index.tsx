import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient } from 'react-query'
import { Router } from 'routing'
import { AppProviders } from 'shared'

const QUERIES_CACHE_TIME = 60000 // 60s in ms
const QUERIES_STALE_TIME = 30000 // 30s in ms

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      cacheTime: QUERIES_CACHE_TIME,
      staleTime: QUERIES_STALE_TIME,
    },
  },
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <AppProviders queryClient={queryClient}>
      <Router />
    </AppProviders>
  </React.StrictMode>
)
