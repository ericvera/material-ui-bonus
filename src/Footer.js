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
import useMarginStyles, { MarginPropTypes } from './helpers/useMarginStyles'

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

const Footer = ({
  children,
  marginBottomLevel = '0',
  marginTopLevel = '0'
}) => {
  const classes = useStyles()
  const marginClassName = useMarginStyles(marginTopLevel, marginBottomLevel)

  return (
    <footer className={[classes.footer, marginClassName].join(' ')}>
      <InnerContainer flex={true} centered={false}>
        <Toolbar className={classes.toolbar} disableGutters={true}>
          {children}
        </Toolbar>
      </InnerContainer>
    </footer>
  )
}

Footer.propTypes = exact({
  children: PropTypes.node,
  marginBottomLevel: MarginPropTypes,
  marginTopLevel: MarginPropTypes
})

export default Footer
