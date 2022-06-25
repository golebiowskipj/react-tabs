import { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'

interface TabPaneProps<UrlType> {
  tabUrl: UrlType
  renderTabPane: ({ isActive }: { isActive: boolean }) => ReactNode
}

export const TabPane = <UrlType,>(props: TabPaneProps<UrlType>) => {
  const { tabUrl, renderTabPane } = props
  return (
    <NavLink to={tabUrl}>
      {({ isActive }) => renderTabPane({ isActive })}
    </NavLink>
  )
}
