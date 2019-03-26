// Framework
import React from 'react'
import PropTypes from 'prop-types'
// Material-UI
import MaterialUIAppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles } from '@material-ui/styles'
// Helpers
import AppBarButton from './internal/AppBarButton'
import Colors from './helpers/Colors'
import InnerContainer from './internal/InnerContainer'

const useStyles = makeStyles({
  bottom: {
    top: 'auto',
    bottom: 0,
    backgroundColor: Colors.background,
    padding: 0,
    borderTopStyle: 'solid',
    borderTopColor: Colors.primaryDisabled,
    borderTopWidth: 1
  }
})

// TODO: Add support for AppBar with menu

const AppBar = ({
  location = 'top',
  leftButtonIcon = 'back',
  leftButtonOnClick,
  children
}) => {
  const classes = useStyles()

  let content

  if (location === 'top') {
    content = (
      <AppBarButton
        icon={leftButtonIcon}
        side="left"
        onClick={leftButtonOnClick}
      />
    )
  } else {
    content = <InnerContainer disableGutters={true}>{children}</InnerContainer>
  }

  return (
    <MaterialUIAppBar
      position="fixed"
      className={location === 'top' ? '' : classes.bottom}
      component={location === 'top' ? 'header' : 'footer'}
    >
      <Toolbar>{content}</Toolbar>
    </MaterialUIAppBar>
  )
}

AppBar.propTypes = {
  location: PropTypes.oneOf(['top', 'bottom']),
  leftButtonIcon: PropTypes.oneOf(['back', 'close']),
  leftButtonOnClick: PropTypes.func
}

export default AppBar
