import { Paths } from 'routing'
import { ReactComponent as Icon } from './assets/not-found.svg'
import {
  Header,
  LinkToDashboard,
  NotFoundPageLayout,
  SvgWrapper,
} from './NotFoundPage.styles'

export const NotFoundPage = () => (
  <NotFoundPageLayout>
    <SvgWrapper>
      <Icon />
    </SvgWrapper>
    <Header>Page not found</Header>
    <LinkToDashboard to={Paths.INDEX}>Go to dashboard</LinkToDashboard>
  </NotFoundPageLayout>
)
