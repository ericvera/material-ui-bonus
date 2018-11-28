// Material-UI
import Button from '@material-ui/core/Button'
// Other
import styled from './styled'

export default styled(Button)(theme => ({
  backgroundColor: 'transparent',
  marginTop: theme.spacing.unit * 3
}))
