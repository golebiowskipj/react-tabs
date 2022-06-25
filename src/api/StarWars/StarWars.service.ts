import { apiConnector } from '../apiConnector'

export const SWAPI_BASE_URL = 'https://swapi.dev/api/'

const { get } = apiConnector(SWAPI_BASE_URL)

interface SwapiResponse<ResultsType> {
  count: number
  results: ResultsType[]
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

export type SwapiFilmsResponse = SwapiResponse<SwapiFilmsResults>
export type SwapiPeopleResponse = SwapiResponse<SwapiPeopleResults>
export type SwapiPlanetsResponse = SwapiResponse<SwapiPlanetsResults>

export const starWarsApi = () => {
  const getPeople = () => {
    return get<SwapiPeopleResponse>({ url: 'people' })
  }
  const getPlanets = () => {
    return get<SwapiPlanetsResponse>({ url: 'planets' })
  }
  const getFilms = () => {
    return get<SwapiFilmsResponse>({ url: 'films' })
  }

  return { getPeople, getPlanets, getFilms }
}
