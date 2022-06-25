import { css } from 'styled-components'

export const heading1 = css`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-weight: normal;
  font-size: 2rem;
  line-height: 1;
  color: ${({ theme }) => theme.color.textPrimary};
`

export const buttonText = css`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-weight: normal;
  font-size: 1rem;
  line-height: 1;
  color: ${({ theme }) => theme.color.primary};
`

export const tabText = css`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-weight: normal;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: ${({ theme }) => theme.color.primary};
`

export const listItemText = css`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-weight: normal;
  font-size: 1rem;
  line-height: 1;
  color: ${({ theme }) => theme.color.textPrimary};
`
