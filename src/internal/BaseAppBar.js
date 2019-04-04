// Framework
import React from 'react'
import PropTypes from 'prop-types'
import exact from 'prop-types-exact'
// Material-UI
import MaterialUIAppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles } from '@material-ui/styles'
// Helpers
import Colors from '../helpers/Colors'
import InnerContainer from './InnerContainer'

const useStyles = makeStyles({
  bottom: {
    top: 'auto',
    bottom: 0,
    padding: 0,
    borderTopStyle: 'solid',
    borderTopColor: Colors.primaryDisabled,
    borderTopWidth: 1
  },
  background: {
    backgroundColor: Colors.background
  },
  transparent: {
    backgroundColor: Colors.transparent
  }
})

const BaseAppBar = ({
  location = 'top',
  centered = false,
  children,
  color = 'background'
}) => {
  const classes = useStyles()

  let classNames = [classes[color]]

  if (location === 'bottom') {
    classNames.push(classes.bottom)
  }

  return (
    <MaterialUIAppBar
      position="fixed"
      className={classNames.join(' ')}
      component={location === 'top' ? 'header' : 'footer'}
    >
      <Toolbar>
        <InnerContainer centered={centered} disableGutters={true} flex={true}>
          {children}
        </InnerContainer>
      </Toolbar>
    </MaterialUIAppBar>
  )
}

BaseAppBar.propTypes = exact({
  centered: PropTypes.bool,
  children: PropTypes.node,
  color: PropTypes.oneOf(['background', 'transparent']),
  location: PropTypes.oneOf(['top', 'bottom'])
})

export default BaseAppBar
