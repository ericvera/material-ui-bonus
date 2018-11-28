// Framework
import React from 'react'
// Material-UI
import { withStyles } from '@material-ui/core/styles'

const styles = theme => {
  return {
    instructions: {
      color: theme.palette.grey[400]
    }
  }
}

const InstructionsHighlight = ({ children, classes }) => (
  <span className={classes.instructions}>{children}</span>
)

export default withStyles(styles, { withTheme: true })(InstructionsHighlight)
