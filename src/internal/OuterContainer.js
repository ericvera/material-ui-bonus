// Framework
import React from 'react'
import PropTypes from 'prop-types'
import exact from 'prop-types-exact'
// Material-UI
import { makeStyles } from '@material-ui/styles'
// Helpers
import { Color, SpacingLevel } from '../helpers/constants'
import { SpacingLevelPropTypes } from '../helpers/PropTypes'
import getColor from '../helpers/getColor'
import getSpacing from '../helpers/getSpacing'
// Hooks
import useMarginStyles from '../hooks/useMarginStyles'
import usePaddingStyles from '../hooks/usePaddingStyles'

const useStyles = backgroundImage =>
  makeStyles(theme => ({
    mainFullHeight: {
      backgroundColor: getColor(Color.background),
      display: 'flex',
      flex: '1 0 auto',
      flexDirection: 'column',
      // Padding so that on a screen longer than viewport the last element does not "stick"
      //  to the bottom. It is padding so it will not make the full-height container grow
      //  unnecesarily.
      paddingBottom: getSpacing(SpacingLevel.l4)
    },
    main: {
      backgroundColor: getColor(Color.background),
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
  backgroundImage,
  children,
  className,
  fullPage = true,
  marginBottomLevel = SpacingLevel.l0,
  marginTopLevel = SpacingLevel.l0,
  paddingBottomLevel = SpacingLevel.l0,
  paddingTopLevel = SpacingLevel.l0
}) => {
  const classes = useStyles(backgroundImage)
  const marginsClassName = useMarginStyles(marginTopLevel, marginBottomLevel)
  const paddingClassName = usePaddingStyles(paddingTopLevel, paddingBottomLevel)

  const mainClassName = fullPage ? classes.mainFullHeight : classes.main
  let classNames = [marginsClassName, paddingClassName, mainClassName]

  if (className) {
    classNames.unshift(className)
  }

  if (backgroundImage) {
    classNames.push(classes.backgroundImageContainer)
  }

  return <div className={classNames.join(' ')}>{children}</div>
}

OuterContainer.propTypes = exact({
  backgroundImage: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  fullPage: PropTypes.bool,
  marginBottomLevel: SpacingLevelPropTypes,
  marginTopLevel: SpacingLevelPropTypes,
  paddingBottomLevel: SpacingLevelPropTypes,
  paddingTopLevel: SpacingLevelPropTypes
})

export default OuterContainer
