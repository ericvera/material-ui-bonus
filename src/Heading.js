// Framework
import React from 'react'
// Components
import GutteredContainer from './GutteredContainer'
// Material-UI
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core'

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 4
  },
  // This needs to exist empty so that it can be overwritten
  // by consumers of this component
  typography: {}
})

const Heading = ({ children, classes, ...others }) => (
  <GutteredContainer className={classes.root} {...others}>
    <Typography variant="h3" className={classes.typography}>
      {children}
    </Typography>
  </GutteredContainer>
)

export default withStyles(styles, { withTheme: true })(Heading)
