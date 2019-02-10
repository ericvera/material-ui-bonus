// Framework
import React from 'react'
// Material-UI
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  flex: {
    flexGrow: 1
  }
})

const FlexContainer = ({ children, ...others }) => {
  const classes = useStyles()

  return (
    <div className={classes.flex} {...others}>
      {children}
    </div>
  )
}

export default FlexContainer
