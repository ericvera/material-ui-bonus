// Platform
import React from 'react'
// Material-UI
import { makeStyles } from '@material-ui/styles'

const useGutteredStyles = makeStyles(theme => ({
  gutters: theme.mixins.gutters()
}))

const GutteredContainer = ({ disableGutters = false, children }) => {
  if (disableGutters) {
    return children
  }

  const classes = useGutteredStyles()

  return <div className={classes.gutters}>{children}</div>
}

export default GutteredContainer
