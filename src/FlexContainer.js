// Framework
import React from 'react'
// Material-UI
import { withStyles } from '@material-ui/core'

const styles = () => ({
  flex: {
    flexGrow: 1
  }
})

const FlexContainer = ({ children, classes, ...others }) => (
  <div className={classes.flex} {...others}>
    {children}
  </div>
)

export default withStyles(styles)(FlexContainer)
