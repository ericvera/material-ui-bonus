// Framework
import React from 'react'
// Material-UI
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  instructions: {
    marginTop: theme.spacing.unit * 2
  }
}))

const InstructionsContainer = ({ children, ...others }) => {
  const classes = useStyles()

  return (
    <Typography variant="body1" className={classes.instructions} {...others}>
      {children}
    </Typography>
  )
}

export default InstructionsContainer
