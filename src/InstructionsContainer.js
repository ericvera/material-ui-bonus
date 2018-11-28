// Framework
import React from 'react'
// Material-UI
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => {
  return {
    instructions: {
      marginTop: theme.spacing.unit * 2
    }
  }
}

const InstructionsContainer = ({ children, classes, ...others }) => (
  <Typography variant="body1" className={classes.instructions} {...others}>
    {children}
  </Typography>
)

export default withStyles(styles, { withTheme: true })(InstructionsContainer)
