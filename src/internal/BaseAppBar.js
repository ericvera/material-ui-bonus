// Framework
import React from 'react'
import PropTypes from 'prop-types'
// Material-UI
import MaterialUIAppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles } from '@material-ui/styles'
// Helpers
import AppBarButton from './AppBarButton'
import Colors from '../helpers/Colors'
import InnerContainer from './InnerContainer'

const useStyles = makeStyles({
  bottom: {
    top: 'auto',
    bottom: 0,
    backgroundColor: Colors.background,
    padding: 0,
    borderTopStyle: 'solid',
    borderTopColor: Colors.primaryDisabled,
    borderTopWidth: 1
  },
  middleImage: {
    flex: 1,
    textAlign: 'center'
  }
})

const BaseAppBar = ({
  location = 'top',
  leftButtonIcon = 'back',
  leftButtonOnClick,
  middleImage,
  children
}) => {
  const classes = useStyles()

  let content

  if (location === 'top') {
    content = (
      <>
        <AppBarButton
          side="left"
          icon={leftButtonIcon}
          onClick={leftButtonOnClick}
        />
        <div className={classes.middleImage}>{middleImage}</div>
        <AppBarButton side="right" icon="empty" />
      </>
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

BaseAppBar.propTypes = {
  location: PropTypes.oneOf(['top', 'bottom']),
  leftButtonIcon: PropTypes.oneOf(['back', 'close', 'menu']),
  leftButtonOnClick: PropTypes.func,
  middleImage: PropTypes.element
}

export default BaseAppBar
