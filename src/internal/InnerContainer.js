// Framework
import React from 'react'
// Material-UI
import Grid from '@material-ui/core/Grid'
// Helpers
import useGutterStyles from '../helpers/useGuttersStyles'

const InnerContainer = ({
  centered = true,
  disableGutters = false,
  children
}) => {
  const guttersClassName = useGutterStyles(disableGutters)

  if (!centered) {
    return <div className={guttersClassName}>{children}</div>
  }

  return (
    <Grid
      container
      justify="center"
      alignContent="center"
      className={guttersClassName}
    >
      <Grid item xs={12} sm={9} md={6} lg={3}>
        {children}
      </Grid>
    </Grid>
  )
}

export default InnerContainer
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
