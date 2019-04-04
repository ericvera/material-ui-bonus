// Platform
import React from 'react'
import PropTypes from 'prop-types'
import exact from 'prop-types-exact'
// Components
import InnerContainer from './internal/InnerContainer'
// Helpers
import useMarginStyles, { MarginPropTypes } from './helpers/useMarginStyles'
import Colors from './helpers/Colors'
// Material-UI
import MaterialUIDivider from '@material-ui/core/Divider'
import { makeStyles } from '@material-ui/styles'

// TODO: Create 3 col layout element? Container?

const useStyles = makeStyles({
  divider: {
    color: Colors.secondary
  }
})

const Divider = ({
  centered = true,
  disableGutters = true,
  marginBottomLevel = '0',
  marginTopLevel = '0'
}) => {
  const classes = useStyles()
  const marginClassName = useMarginStyles(marginTopLevel, marginBottomLevel)

  return (
    <InnerContainer centered={centered} disableGutters={disableGutters}>
      <MaterialUIDivider
        className={[classes.divider, marginClassName].join(' ')}
      />
    </InnerContainer>
  )
}

Divider.propTypes = exact({
  centered: PropTypes.bool,
  disableGutters: PropTypes.bool,
  marginBottomLevel: MarginPropTypes,
  marginTopLevel: MarginPropTypes
})

export default Divider
