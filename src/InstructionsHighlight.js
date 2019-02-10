// Framework
import React from 'react'
// Material-UI
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  instructions: {
    color: theme.palette.grey[400]
  }
}))

const InstructionsHighlight = ({ children }) => {
  const classes = useStyles()

  return <span className={classes.instructions}>{children}</span>
}

export default InstructionsHighlight
