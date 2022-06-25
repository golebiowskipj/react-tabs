import { Navigate, Route, Routes } from 'react-router-dom'
import { TabPane } from 'routing'
import { PanesWrapper, TabContentWrapper, TabsPane } from 'ui-kit'

type StarWarsTabPanes = 'films' | 'people' | 'planets'

const TAB_NAME_FILMS = 'Films'
const TAB_NAME_PEOPLE = 'People'
const TAB_NAME_PLANETS = 'Planets'

export const StarWarsTabWidget = () => {
  return (
    <>
      <PanesWrapper>
        <TabPane<StarWarsTabPanes>
          tabUrl='films'
          renderTabPane={({ isActive }) => (
            <TabsPane count={1} isActive={isActive} name={TAB_NAME_FILMS} />
          )}
        />
        <TabPane<StarWarsTabPanes>
          tabUrl='people'
          renderTabPane={({ isActive }) => (
            <TabsPane count={0} isActive={isActive} name={TAB_NAME_PEOPLE} />
          )}
        />
        <TabPane<StarWarsTabPanes>
          tabUrl='planets'
          renderTabPane={({ isActive }) => (
            <TabsPane count={12} isActive={isActive} name={TAB_NAME_PLANETS} />
          )}
        />
      </PanesWrapper>
      <TabContentWrapper>
        <Routes>
          <Route path='films' element={<div>films</div>} />
          <Route path='planets' element={<div>planets</div>} />
          <Route path='people' element={<div>people</div>} />
          <Route index element={<Navigate to='films' />} />
          <Route path='*' element={<Navigate to='films' />} />
        </Routes>
      </TabContentWrapper>
    </>
  )
}
