// Framework
import React from 'react'
// Material-UI
import Grid from '@material-ui/core/Grid'
// Internal
import GutteredContainer from './GutteredContainer'

const InnerContainer = ({
  centered = true,
  disableGutters = false,
  children
}) => {
  const content = (
    <GutteredContainer disableGutters={disableGutters}>
      {children}
    </GutteredContainer>
  )

  if (!centered) {
    return content
  }

  return (
    <Grid container justify="center" alignContent="center">
      <Grid item xs={12} sm={9} md={6} lg={3}>
        {content}
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
