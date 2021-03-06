import { Navigate, Route, Routes } from 'react-router-dom'
import { TabPane } from 'routing'
import { PanesWrapper, TabContentWrapper, TabsPane } from 'ui-kit'
import { useFilmsModel } from '../../models/Films/Films.service'
import { usePeopleModel } from '../../models/People/People.service'
import { usePlanetsModel } from '../../models/Planets/Planets.service'
import { FilmsList } from '../FilmsList/FilmsList.component'
import { PeopleList } from '../PeopleList/PeopleList.component'
import { PlanetsList } from '../PlanetsList/PlanetsList.component'

type StarWarsTabPanes = 'films' | 'people' | 'planets'

const TAB_NAME_FILMS = 'Films'
const TAB_NAME_PEOPLE = 'People'
const TAB_NAME_PLANETS = 'Planets'

export const StarWarsTabWidget = () => {
  const { films } = useFilmsModel()
  const { people } = usePeopleModel()
  const { planets } = usePlanetsModel()

  return (
    <>
      <PanesWrapper>
        <TabPane<StarWarsTabPanes>
          tabUrl='films'
          renderTabPane={({ isActive }) => (
            <TabsPane
              count={films?.count}
              isActive={isActive}
              name={TAB_NAME_FILMS}
            />
          )}
        />
        <TabPane<StarWarsTabPanes>
          tabUrl='people'
          renderTabPane={({ isActive }) => (
            <TabsPane
              count={people?.count}
              isActive={isActive}
              name={TAB_NAME_PEOPLE}
            />
          )}
        />
        <TabPane<StarWarsTabPanes>
          tabUrl='planets'
          renderTabPane={({ isActive }) => (
            <TabsPane
              count={planets?.count}
              isActive={isActive}
              name={TAB_NAME_PLANETS}
            />
          )}
        />
      </PanesWrapper>
      <TabContentWrapper>
        <Routes>
          <Route path='films' element={<FilmsList />} />
          <Route path='planets' element={<PlanetsList />} />
          <Route path='people' element={<PeopleList />} />
          <Route index element={<Navigate to='films' />} />
          <Route path='*' element={<Navigate to='films' />} />
        </Routes>
      </TabContentWrapper>
    </>
  )
}
