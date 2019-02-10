// Component
import CenteredContainer from './CenteredContainer'
import { styled } from '@material-ui/styles'

export default styled(CenteredContainer)(theme => ({
  textAlign: 'center',
  marginTop: theme.spacing.unit * 4
}))
