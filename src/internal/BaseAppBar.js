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
    backgroundColor: Colors.background,
    padding: 0,
    borderTopStyle: 'solid',
    borderTopColor: Colors.primaryDisabled,
    borderTopWidth: 1
  }
})

const BaseAppBar = ({ location = 'top', centered = false, children }) => {
  const classes = useStyles()

  // TODO: LEFT HERE! Figure out how to set {justify-content: space-between}

  return (
    <MaterialUIAppBar
      position="fixed"
      className={location === 'top' ? '' : classes.bottom}
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
  location: PropTypes.oneOf(['top', 'bottom'])
})

export default BaseAppBar
