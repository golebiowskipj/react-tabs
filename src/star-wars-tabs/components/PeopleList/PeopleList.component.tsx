import { ListText } from 'ui-kit'
import { usePeopleModel } from '../../models/People/People.service'

export const PeopleList = () => {
  const { people } = usePeopleModel()

  if (!people || people.count === 0) return null

  return (
    <ListText
      items={people.results.map(person => ({
        id: person.name,
        content: person.name,
      }))}
    />
  )
}
