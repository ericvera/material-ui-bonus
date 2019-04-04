// Platform
import React from 'react'
import PropTypes from 'prop-types'
import exact from 'prop-types-exact'
// Material-UI
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles } from '@material-ui/styles'
// Internal
import InnerContainer from './internal/InnerContainer'
// Helpers
import Colors from './helpers/Colors'

const useStyles = makeStyles({
  footer: {
    backgroundColor: Colors.background,
    flexShrink: 0
  },
  toolbar: {
    width: '100%',
    justifyContent: 'space-between',
    borderTopStyle: 'solid',
    borderTopWidth: 1,
    borderTopColor: Colors.primaryDisabled
  }
})

const Footer = ({ children }) => {
  const classes = useStyles()

  return (
    <footer className={classes.footer}>
      <InnerContainer flex={true} centered={false}>
        <Toolbar className={classes.toolbar} disableGutters={true}>
          {children}
        </Toolbar>
      </InnerContainer>
    </footer>
  )
}

Footer.propTypes = exact({
  children: PropTypes.node
})

export default Footer
