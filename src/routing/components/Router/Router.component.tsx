import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import { DashboardPage } from 'dashboard'
import { NotFoundPage } from 'shared'
import { StarWarsTabPage } from 'star-wars-tabs'
import { LayoutMain, NavMain } from 'ui-kit'
import { NavigationLink } from '../NavigationLink/NavigationLink.component'
import { ScrollTop } from '../ScrollTop/ScrollTop.component'

export enum Paths {
  INDEX = '/',
  STAR_WARS = 'star-wars/*',
  NOT_FOUND = '*',
}

export const Router = () => {
  return (
    <BrowserRouter>
      <ScrollTop />
      <Routes>
        <Route
          path={Paths.INDEX}
          element={
            <LayoutMain>
              <NavMain>
                <NavigationLink to={Paths.INDEX}>Home</NavigationLink>
                <NavigationLink to={Paths.STAR_WARS}>Star Wars</NavigationLink>
              </NavMain>
              <Outlet />
            </LayoutMain>
          }
        >
          <Route index element={<DashboardPage />} />
          <Route path={Paths.STAR_WARS} element={<StarWarsTabPage />} />
        </Route>
        <Route path={Paths.NOT_FOUND} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}
