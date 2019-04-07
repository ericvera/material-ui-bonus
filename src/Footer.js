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
import { Color, SpacingLevel } from './helpers/constants'
import getColor from './helpers/getColor'
// Hooks
import useMarginStyles from './hooks/useMarginStyles'
import { SpacingLevelPropTypes } from './helpers/PropTypes'

const useStyles = makeStyles({
  footer: {
    backgroundColor: getColor(Color.background),
    flexShrink: 0
  },
  toolbar: {
    width: '100%',
    justifyContent: 'space-between',
    borderTopStyle: 'solid',
    borderTopWidth: 1,
    borderTopColor: getColor(Color.secondary)
  }
})

const Footer = ({
  children,
  marginBottomLevel = SpacingLevel.l0,
  marginTopLevel = SpacingLevel.l0
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
  marginBottomLevel: SpacingLevelPropTypes,
  marginTopLevel: SpacingLevelPropTypes
})

export default Footer
