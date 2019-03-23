// Framework
import React from 'react'
// Material-UI
import AppBar from '@material-ui/core/AppBar'
import { makeStyles } from '@material-ui/styles'
// Helpers
import getSpacing from './helpers/getSpacing'
import Colors from './helpers/Colors'
import InnerContainer from './internal/InnerContainer'

const useStyles = makeStyles({
  appBar: {
    top: 'auto',
    bottom: 0,
    backgroundColor: Colors.background,
    padding: 0,
    paddingTop: getSpacing(2),
    paddingBottom: getSpacing(2),
    borderTopStyle: 'solid',
    borderTopColor: Colors.primaryDisabled,
    borderTopWidth: 1
  }
})

const BottomAppBar = ({ children }) => {
  const classes = useStyles()

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <InnerContainer>{children}</InnerContainer>
    </AppBar>
  )
}

export default BottomAppBar
