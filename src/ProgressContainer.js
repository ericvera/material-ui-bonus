// Component
import CenteredContainer from './CenteredContainer'
// Other
import styled from './styled'

export default styled(CenteredContainer)(theme => ({
  textAlign: 'center',
  marginTop: theme.spacing.unit * 4
}))
