import { ListText } from 'ui-kit'
import { useFilmsModel } from '../../models/Films/Films.service'

export const FilmsList = () => {
  const { films } = useFilmsModel()

  if (!films || films.count === 0) return null

  return (
    <ListText
      items={films.results.map(film => ({
        id: film.title,
        content: film.title,
      }))}
    />
  )
}
