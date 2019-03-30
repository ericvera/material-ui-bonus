// Framework
import React from 'react'
// Material-UI
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  centeredContent: {
    textAlign: 'center'
  }
})

export default ({ children }) => {
  const classes = useStyles()

  return <div className={classes.centeredContent}>{children}</div>
}
