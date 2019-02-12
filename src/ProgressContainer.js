// Framework
import React from 'react'
// Component
import CenteredContainer from './CenteredContainer'
// Material-UI
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  container: {
    textAlign: 'center',
    marginTop: theme.spacing.unit * 4
  }
}))

const ProgressContainer = ({ ...other }) => {
  const classes = useStyles()

  return <CenteredContainer className={classes.container} {...other} />
}

export default ProgressContainer
