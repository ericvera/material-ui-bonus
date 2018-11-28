// Framework
import React from 'react'
// Material-UI
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  gutters: theme.mixins.gutters()
})

const GutteredContainer = ({ children, classes, className }) => (
  <div className={[classes.gutters, className].join(' ')}>{children}</div>
)

export default withStyles(styles, { withTheme: true })(GutteredContainer)
