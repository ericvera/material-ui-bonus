// Framework
import React from 'react'
import PropTypes from 'prop-types'
import exact from 'prop-types-exact'
// Material-UI
import { makeStyles } from '@material-ui/styles'
// Helpers
import { Color, ScreenSize, SpacingLevel } from '../helpers/constants'
import {
  ScreenSizePropTypes,
  SpacingLevelPropTypes,
  ColorPropTypes
} from '../helpers/PropTypes'
// Hooks
import useColorClassName from '../hooks/useColorClassName'
import useMarginStyles from '../hooks/useMarginStyles'
import usePaddingStyles from '../hooks/usePaddingStyles'
import useScreenSizeStyles from '../hooks/useScreenSizeStyles'

const useStyles = backgroundImage =>
  makeStyles(theme => ({
    mainFullHeight: {
      flex: '1 0 auto',
      flexDirection: 'column'
    },
    main: {
      flexGrow: 1
    },
    backgroundImageContainer: {
      backgroundImage: `url(${backgroundImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100%',

      [theme.breakpoints.up('sm')]: {
        minHeight: '100vh',
        backgroundSize: 'cover'
      }
    }
  }))()

const OuterContainer = ({
  backgroundColor = Color.background,
  backgroundImage,
  children,
  className,
  fullPage = true,
  marginBottomLevel = SpacingLevel.l0,
  marginTopLevel = SpacingLevel.l0,
  paddingBottomLevel = SpacingLevel.l0,
  paddingTopLevel = SpacingLevel.l0,
  screenSize = ScreenSize.all
}) => {
  const classes = useStyles(backgroundImage)
  const marginsClassName = useMarginStyles(marginTopLevel, marginBottomLevel)
  const paddingClassName = usePaddingStyles(paddingTopLevel, paddingBottomLevel)
  const screenSizeClasses = useScreenSizeStyles()
  const backgroundColorClassName = useColorClassName(null, backgroundColor)

  let classNames = [
    fullPage ? classes.mainFullHeight : classes.main,
    paddingClassName,
    marginsClassName,
    screenSizeClasses[screenSize],
    backgroundColorClassName
  ]

  if (className) {
    classNames.push(className)
  }

  if (backgroundImage) {
    classNames.push(classes.backgroundImageContainer)
  }

  return <div className={classNames.join(' ')}>{children}</div>
}

OuterContainer.propTypes = exact({
  backgroundColor: ColorPropTypes,
  backgroundImage: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  fullPage: PropTypes.bool,
  marginBottomLevel: SpacingLevelPropTypes,
  marginTopLevel: SpacingLevelPropTypes,
  paddingBottomLevel: SpacingLevelPropTypes,
  paddingTopLevel: SpacingLevelPropTypes,
  screenSize: ScreenSizePropTypes
})

export default OuterContainer
