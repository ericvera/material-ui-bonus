// Framework
import React from 'react'
// Material-UI
import { makeStyles } from '@material-ui/styles'
// Helpers
import getSpacing from '../helpers/getSpacing'
import useMarginStyles from '../helpers/useMarginStyles'
import Colors from '../helpers/Colors'

const useStyles = makeStyles({
  mainFullHeight: {
    backgroundColor: Colors.background,
    minHeight: '100vh',
    flexGrow: 1,
    // Padding so that on a screen longer than viewport the last element does not "stick"
    //  to the bottom. It is padding so it will not make the full-height container grow
    //  unnecesarily.
    paddingBottom: getSpacing(4)
  },
  main: {
    flexGrow: 1
  }
})

const OuterContainer = ({
  fullPage = true,
  marginTopLevel = '0',
  marginBottomLevel = '0',
  children
}) => {
  const classes = useStyles()
  const marginsClassName = useMarginStyles(marginTopLevel, marginBottomLevel)

  const mainClassName = fullPage ? classes.mainFullHeight : classes.main
  const classNames = [marginsClassName, mainClassName].join(' ')

  return <div className={classNames}>{children}</div>
}

export default OuterContainer
/**
 Page w/ AppBar (always gutter)
 Page w/ AppBar & Footer (always gutter)
 Page w/ centered content (always gutter)
 Page w/ full-width content (maybe gutter?)
 Container inside Footer (centered with gutter)



 Container
 - fullPage (min-height:100vh)
 - hasAppBar (topMargin)
 - hasFooter (bottomMargin)
 - centered (false === full width)

 ContentContainer topMarginLevel, bottomMarginLevel, centered, disabledGutters
 CenteredContainer
 */
