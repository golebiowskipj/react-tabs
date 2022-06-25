import { useQuery } from 'react-query'
import { starWarsApi, SwapiPeopleResponse } from 'api'

const PEOPLE_QUERY_KEY = 'people'

const { getPeople } = starWarsApi()

interface StarWarsPeopleDto {
  count: number
  results: {
    name: string
  }[]
}

const mapFilmDataToDto = (data: SwapiPeopleResponse): StarWarsPeopleDto => {
  const { count, results } = data

  return {
    count,
    results,
  }
}

const getPeopleData = async () => {
  const data = await getPeople()

  return mapFilmDataToDto(data)
}

export const usePeopleModel = () => {
  const { data, isLoading, isError, error } = useQuery(
    [PEOPLE_QUERY_KEY],
    getPeopleData
  )

  return {
    people: data,
    isErrorPeople: isError,
    errorPeople: error,
    isLoadingPeople: isLoading,
  }
}
