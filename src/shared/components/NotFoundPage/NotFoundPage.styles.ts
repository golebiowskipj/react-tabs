import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { buttonStyles, Typography } from 'ui-kit'

export const SvgWrapper = styled.div`
  width: 300px;
  height: 300px;
  margin: 0 auto 4rem;

  svg {
    width: 100%;
    height: 100%;
  }
`

export const NotFoundPageLayout = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`
export const Header = styled.h1`
  ${Typography.heading1};
  margin-bottom: 2rem;
`

export const LinkToDashboard = styled(Link)`
  ${buttonStyles};
`
