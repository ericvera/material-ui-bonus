// Platform
import React from 'react'
import PropTypes from 'prop-types'
import exact from 'prop-types-exact'
// Material-UI
import MaterialUISvgIcon from '@material-ui/core/SvgIcon'
import { makeStyles } from '@material-ui/styles'
// Helpers
import { Color, SpacingLevel } from './helpers/constants'
import { SpacingLevelPropTypes, ColorPropTypes } from './helpers/PropTypes'
import getColor from './helpers/getColor'
// Hooks
import useMarginStyles from './hooks/useMarginStyles'

const useStyles = makeStyles({
  svgIconSize: {
    height: 'unset',
    verticalAlign: 'middle',
    width: 'unset'
  }
})

const SvgIcon = ({
  children,
  color = Color.primary,
  height = 24,
  marginBottomLevel = SpacingLevel.l0,
  marginTopLevel = SpacingLevel.l0,
  viewBox
}) => {
  const marginClassName = useMarginStyles(marginTopLevel, marginBottomLevel)
  const classes = useStyles()

  return (
    <MaterialUISvgIcon
      className={[marginClassName, classes.svgIconSize].join(' ')}
      height={height}
      nativeColor={getColor(color)}
      viewBox={viewBox}
    >
      {children}
    </MaterialUISvgIcon>
  )
}

SvgIcon.propTypes = exact({
  children: PropTypes.node,
  color: ColorPropTypes,
  height: PropTypes.number,
  marginBottomLevel: SpacingLevelPropTypes,
  marginTopLevel: SpacingLevelPropTypes,
  viewBox: PropTypes.string
})

export default SvgIcon
