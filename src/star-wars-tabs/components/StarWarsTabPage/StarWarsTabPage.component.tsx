import { useFilmsModel } from '../../models/Films/Films.service'
import { StarWarsTabWidget } from '../StarWarsTabWidget/StarWarsTabWidget.component'
import { usePeopleModel } from '../../models/People/People.service'
import { usePlanetsModel } from '../../models/Planets/Planets.service'

export const StarWarsTabPage = () => {
  const { isLoadingFilms, isErrorFilms, errorFilms } = useFilmsModel()
  const { isLoadingPeople, isErrorPeople, errorPeople } = usePeopleModel()
  const { isLoadingPlanets, isErrorPlanets, errorPlanets } = usePlanetsModel()

  const isLoading = isLoadingFilms || isLoadingPeople || isLoadingPlanets
  const isError = isErrorFilms || isErrorPeople || isErrorPlanets

  if (isLoading) return <div>loading</div>
  if (isError) {
    // TODO: implement proper logger
    // console.error(errorFilms || errorPeople || errorPlanets)
    return <div>Something went wrong</div>
  }

  return <StarWarsTabWidget />
}
