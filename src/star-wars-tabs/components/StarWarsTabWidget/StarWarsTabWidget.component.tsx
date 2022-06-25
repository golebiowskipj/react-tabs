import { Navigate, Route, Routes } from 'react-router-dom'
import { TabPane } from 'routing'

type StarWarsTabPanes = 'films' | 'people' | 'planets'

const Pane = ({
  isActive,
  count,
  name,
}: {
  isActive: boolean
  count: number
  name: string
}) => {
  return (
    <div>
      {name} {count} {isActive && <>aktywny</>}
    </div>
  )
}

export const StarWarsTabWidget = () => {
  return (
    <>
      <TabPane<StarWarsTabPanes>
        tabUrl='films'
        renderTabPane={({ isActive }) => (
          <Pane count={1} isActive={isActive} name='films' />
        )}
      />
      <TabPane<StarWarsTabPanes>
        tabUrl='planets'
        renderTabPane={({ isActive }) => (
          <Pane count={0} isActive={isActive} name='planets' />
        )}
      />
      <Routes>
        <Route index element={<Navigate to='films' />} />
        <Route path='films' element={<div>films</div>} />
        <Route path='planets' element={<div>planets</div>} />
        <Route path='*' element={<Navigate to='films' />} />
      </Routes>
    </>
  )
}
