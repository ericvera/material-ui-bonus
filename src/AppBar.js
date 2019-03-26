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

const AppBar = ({ onClick, location = 'top', leftIcon = 'back', children }) => {
  const classes = useStyles()

  let content

  if (location === 'top') {
    content = <AppBarButton icon={leftIcon} side="left" onClick={onClick} />
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
  onClick: PropTypes.func,
  location: PropTypes.oneOf(['top', 'bottom']),
  leftIcon: PropTypes.oneOf(['back', 'close'])
}

export default AppBar
