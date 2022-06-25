import { ListItem } from './ListText.styles'

interface ListProps {
  items: { id: string; content: string }[]
}

export const ListText = (props: ListProps) => {
  const { items } = props

  return (
    <ul>
      {items.map(item => (
        <ListItem key={item.id}>{item.content}</ListItem>
      ))}
    </ul>
  )
}
