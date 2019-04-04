// Framework
import React from 'react'
import PropTypes from 'prop-types'
import exact from 'prop-types-exact'
// Material-UI
import { makeStyles } from '@material-ui/styles'
// Helpers
import getSpacing from '../helpers/getSpacing'
import useMarginStyles, { MarginPropTypes } from '../helpers/useMarginStyles'
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
  fullPage = true,
  marginTopLevel = '0',
  marginBottomLevel = '0',
  children,
  backgroundImage
}) => {
  const classes = useStyles(backgroundImage)
  const marginsClassName = useMarginStyles(marginTopLevel, marginBottomLevel)

  const mainClassName = fullPage ? classes.mainFullHeight : classes.main
  let classNames = [marginsClassName, mainClassName]

  if (backgroundImage) {
    classNames.push(classes.backgroundImageContainer)
  }

  return <div className={classNames.join(' ')}>{children}</div>
}

OuterContainer.propTypes = exact({
  backgroundImage: PropTypes.string,
  children: PropTypes.node,
  fullPage: PropTypes.bool,
  marginBottomLevel: MarginPropTypes,
  marginTopLevel: MarginPropTypes
})

export default OuterContainer
