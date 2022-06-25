/* eslint-disable import/no-extraneous-dependencies */
/* eslint import/extensions: 0 */
import { render, waitFor } from '@testing-library/react'
import { QueryClient } from 'react-query'
import { setupServer } from 'msw/node'
import { BrowserRouter } from 'react-router-dom'
import { AppProviders } from 'shared'
import { filmsHandler, planetsHandler, peopleHandler } from 'api'
import { StarWarsTabPage } from './StarWarsTabPage.component'

describe('StarWarsTabPage', () => {
  const renderPage = () => {
    const client = new QueryClient()
    const result = render(
      <AppProviders queryClient={client}>
        <BrowserRouter>
          <StarWarsTabPage />
        </BrowserRouter>
      </AppProviders>
    )

    return result
  }

  it('shows loading screen that changes into tabs component with fils, people and planets tabs', async () => {
    const handlers = [filmsHandler, planetsHandler, peopleHandler]
    const server = setupServer(...handlers)
    server.listen({
      onUnhandledRequest: 'warn',
    })
    const { getByText } = renderPage()

    getByText(/loading/)

    await waitFor(() => {
      getByText(/Films/)
      getByText(/People/)
      getByText(/Planets/)
    })
  })
})
