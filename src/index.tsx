import React from 'react'
import ReactDOM from 'react-dom/client'
import { Router } from 'routing'
import { AppProviders } from 'shared'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <AppProviders>
      <Router />
    </AppProviders>
  </React.StrictMode>
)
