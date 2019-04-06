// Framework
import React from 'react'
import PropTypes from 'prop-types'
import exact from 'prop-types-exact'
// Material-UI
import { makeStyles } from '@material-ui/styles'
// Helpers
import getSpacing from '../helpers/getSpacing'
import useMarginStyles, { MarginPropTypes } from '../helpers/useMarginStyles'
import usePaddingStyles, { PaddingPropTypes } from '../helpers/usePaddingStyles'
import Colors from '../helpers/Colors'

const useStyles = backgroundImage =>
  makeStyles(theme => ({
    mainFullHeight: {
      backgroundColor: Colors.background,
      display: 'flex',
      flex: '1 0 auto',
      flexDirection: 'column',
      // Padding so that on a screen longer than viewport the last element does not "stick"
      //  to the bottom. It is padding so it will not make the full-height container grow
      //  unnecesarily.
      paddingBottom: getSpacing(4)
    },
    main: {
      backgroundColor: Colors.background,
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
  marginBottomLevel = '0',
  marginTopLevel = '0',
  paddingBottomLevel = '0',
  paddingTopLevel = '0'
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
  marginBottomLevel: MarginPropTypes,
  marginTopLevel: MarginPropTypes,
  paddingBottomLevel: PaddingPropTypes,
  paddingTopLevel: PaddingPropTypes
})

export default OuterContainer
