import styled from 'styled-components'
import { listItemText } from '../Typography/Typography.styles'

export const ListItem = styled.li`
  ${listItemText};
  & + * {
    margin-top: 1rem;
  }

  width: fit-content;

  &:hover {
    background-color: ${({ theme }) => theme.color.backgroundPrimary};
  }
`
