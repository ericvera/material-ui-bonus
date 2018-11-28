// Framework
import React from 'react'
// Material-UI
import Grid from '@material-ui/core/Grid'

export default ({ children, ...others }) => (
  <Grid container justify="center" alignContent="center" {...others}>
    <Grid item xs={12} sm={9} md={6} lg={3}>
      {children}
    </Grid>
  </Grid>
)
