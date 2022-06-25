import { css } from 'styled-components'
import { buttonText } from '../Typography/Typography.styles'

export const buttonStyles = css`
  ${buttonText};
  border: 1px solid ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.primary};
  background-color: ${({ theme }) => theme.color.backgroundPrimary};
  text-transform: uppercase;
  padding: 1rem;
  border-radius: 0.5rem;

  &:hover,
  &:focus {
    background-color: transparent;
  }
`
