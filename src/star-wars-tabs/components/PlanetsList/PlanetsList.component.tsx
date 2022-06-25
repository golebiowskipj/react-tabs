import { ListText } from 'ui-kit'
import { usePlanetsModel } from '../../models/Planets/Planets.service'

export const PlanetsList = () => {
  const { planets } = usePlanetsModel()

  if (!planets || planets.count === 0) return null

  return (
    <ListText
      items={planets.results.map(planet => ({
        id: planet.name,
        content: planet.name,
      }))}
    />
  )
}
