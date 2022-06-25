import { StyledPane, StyledPaneCounter } from '../../Tabs.styles'

interface TabsPaneProps {
  isActive: boolean
  count?: number
  name: string
}

export const TabsPane = (props: TabsPaneProps) => {
  const { isActive, name, count } = props
  return (
    <StyledPane isActive={isActive}>
      {name}
      {count !== undefined && (
        <StyledPaneCounter isActive={isActive}>{count}</StyledPaneCounter>
      )}
    </StyledPane>
  )
}
