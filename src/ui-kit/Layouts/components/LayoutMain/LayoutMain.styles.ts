import styled, { css } from 'styled-components'

const NAV_HEIGHT = '4rem'

export const LayoutMain = styled.main`
  width: 100%;
  max-width: 1200px;
  min-height: 100%;
  margin: 0 auto;
  padding: 2rem 0;
  margin-top: ${NAV_HEIGHT};
`

export const NavMain = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${NAV_HEIGHT};
  background-color: ${({ theme }) => theme.color.backgroundSecondary};
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);

  & > * + * {
    margin-left: 1rem;
  }
`

export const NavMainLink = styled.span<{ isActive: boolean }>`
  ${({ isActive }) => {
    if (isActive) {
      return css`
        padding-bottom: 0.25rem;
        border-bottom: 2px solid ${({ theme }) => theme.color.primary};
      `
    }
    return ''
  }}
`
