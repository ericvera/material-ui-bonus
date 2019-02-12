// Framework
import React from 'react'
// Material-UI
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  button: {
    marginTop: theme.spacing.unit * 3
  }
}))

const MarginButton = ({ ...other }) => {
  const classes = useStyles()

  return <Button className={classes.button} {...other} />
}

export default MarginButton
