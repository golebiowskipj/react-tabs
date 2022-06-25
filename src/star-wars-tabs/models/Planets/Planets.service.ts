import { useQuery } from 'react-query'
import { starWarsApi, SwapiPlanetsResponse } from 'api'

const PLANETS_QUERY_KEY = 'planets'

const { getPlanets } = starWarsApi()

interface StarWarsPlanetsDto {
  count: number
  results: {
    name: string
  }[]
}

const mapFilmDataToDto = (data: SwapiPlanetsResponse): StarWarsPlanetsDto => {
  const { count, results } = data

  return {
    count,
    results,
  }
}

const getPlanetsData = async () => {
  const data = await getPlanets()

  return mapFilmDataToDto(data)
}

export const usePlanetsModel = () => {
  const { data, isLoading, isError, error } = useQuery(
    [PLANETS_QUERY_KEY],
    getPlanetsData
  )

  return {
    planets: data,
    isErrorPlanets: isError,
    errorPlanets: error,
    isLoadingPlanets: isLoading,
  }
}
