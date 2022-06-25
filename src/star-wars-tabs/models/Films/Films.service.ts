import { useQuery } from 'react-query'
import { starWarsApi, SwapiFilmsResponse } from 'api'

const FILMS_QUERY_KEY = 'films'

const { getFilms } = starWarsApi()

interface StarWarsFilmsDto {
  count: number
  results: {
    title: string
  }[]
}

const mapFilmDataToDto = (data: SwapiFilmsResponse): StarWarsFilmsDto => {
  const { count, results } = data

  return {
    count,
    results,
  }
}

const getFilmsData = async () => {
  const data = await getFilms()

  return mapFilmDataToDto(data)
}

export const useFilmsModel = () => {
  const { data, isLoading, isError, error } = useQuery(
    [FILMS_QUERY_KEY],
    getFilmsData
  )

  return {
    films: data,
    isErrorFilms: isError,
    errorFilms: error,
    isLoadingFilms: isLoading,
  }
}
