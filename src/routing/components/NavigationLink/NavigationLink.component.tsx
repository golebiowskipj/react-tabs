import { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { NavMainLink } from 'ui-kit'

interface NavigationLinkProps {
  to: string
  children: ReactNode
}

export const NavigationLink = (props: NavigationLinkProps) => {
  const { to, children } = props
  return (
    <NavLink to={to}>
      {({ isActive }) => {
        return <NavMainLink isActive={isActive}>{children}</NavMainLink>
      }}
    </NavLink>
  )
}
