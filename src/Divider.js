// Platform
import React from 'react'
import PropTypes from 'prop-types'
import exact from 'prop-types-exact'
// Material-UI
import MaterialUIDivider from '@material-ui/core/Divider'
import { makeStyles } from '@material-ui/styles'
// Internal
import InnerContainer from './internal/InnerContainer'
// Helpers
import { Color, SpacingLevel } from './helpers/constants'
import { SpacingLevelPropTypes } from './helpers/PropTypes'
import getColor from './helpers/getColor'
// Hooks
import useMarginStyles from './hooks/useMarginStyles'

const useStyles = makeStyles({
  divider: {
    color: getColor(Color.secondary)
  }
})

const Divider = ({
  centered = true,
  disableGutters = true,
  marginBottomLevel = SpacingLevel.l0,
  marginTopLevel = SpacingLevel.l0
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
  marginBottomLevel: SpacingLevelPropTypes,
  marginTopLevel: SpacingLevelPropTypes
})

export default Divider
