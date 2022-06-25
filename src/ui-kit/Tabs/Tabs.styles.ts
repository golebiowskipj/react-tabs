import styled, { css } from 'styled-components'
import { tabText } from '../Typography/Typography.styles'

const PANE_DISTANCE = '1rem'

export const TabContentWrapper = styled.div`
  padding: 0 1rem;
  width: 100%;
`

export const PanesWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  padding: 0 1.5rem ${PANE_DISTANCE};
  width: fit-content;

  border-bottom: 2px solid ${({ theme }) => theme.color.backgroundSecondary};
`
export const StyledPaneCounter = styled.span<{ isActive: boolean }>`
  margin-left: 0.5rem;
  background-color: ${({ theme }) => theme.color.backgroundPrimary};
  padding: 0.125rem 0.5rem;
  border-radius: 0.5rem;

  ${({ isActive }) => {
    if (isActive) {
      return css``
    }

    return css`
      background-color: ${({ theme }) => theme.color.backgroundSecondary};
    `
  }}
`

export const StyledPane = styled.div<{ isActive: boolean }>`
  ${tabText};
  ${({ isActive }) => {
    if (isActive) {
      return css``
    }

    return css`
      color: ${({ theme }) => theme.color.textSecondary};
    `
  }}
  padding: 0 0.5rem;
  position: relative;
  width: fit-content;

  &::before {
    ${({ isActive }) => {
      if (isActive) {
        return css`
          content: '';
        `
      }
      return css``
    }};
    position: absolute;
    bottom: -${PANE_DISTANCE};
    transform: translateY(100%);
    border-radius: 4rem;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.color.primary};
  }
`
