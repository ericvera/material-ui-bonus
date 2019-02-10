// Framework
import React from 'react'
// Material-UI
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  gutters: theme.mixins.gutters()
}))

const GutteredContainer = ({ children, className }) => {
  const classes = useStyles()

  return (
    <div className={[classes.gutters, className].join(' ')}>{children}</div>
  )
}

export default GutteredContainer
