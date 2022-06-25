import { apiConnector } from '../apiConnector'

const SWAPI_BASE_URL = 'https://swapi.dev/api/'

const { get } = apiConnector(SWAPI_BASE_URL)

interface SwapiResponse<ResultsType> {
  count: number
  results: ResultsType
}

interface SwapiPeopleResults {
  name: string
}

interface SwapiPlanetsResults {
  name: string
}

interface SwapiFilmsResults {
  title: string
}

export const starWarsApi = () => {
  const getPeople = () => {
    return get<SwapiResponse<SwapiPeopleResults>>({ url: 'people' })
  }
  const getPlanets = () => {
    return get<SwapiResponse<SwapiPlanetsResults>>({ url: 'planets' })
  }
  const getFilms = () => {
    return get<SwapiResponse<SwapiFilmsResults>>({ url: 'films' })
  }

  return { getPeople, getPlanets, getFilms }
}
