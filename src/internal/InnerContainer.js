// Framework
import React from 'react'
import PropTypes from 'prop-types'
import exact from 'prop-types-exact'
// Material-UI
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/styles'
// Helpers
import useGutterStyles from '../helpers/useGuttersStyles'

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  }
})

const InnerContainer = ({
  centered = true,
  flex = false,
  disableGutters = false,
  children
}) => {
  const guttersClassName = useGutterStyles(disableGutters)
  const classes = useStyles()

  const flexClassName = flex ? classes.container : ''

  if (!centered) {
    return (
      <div className={[guttersClassName, flexClassName].join(' ')}>
        {children}
      </div>
    )
  }

  return (
    <Grid
      container
      justify="center"
      alignContent="center"
      className={guttersClassName}
    >
      <Grid item xs={12} sm={9} md={6} lg={3} className={flexClassName}>
        {children}
      </Grid>
    </Grid>
  )
}

InnerContainer.propTypes = exact({
  centered: PropTypes.bool,
  flex: PropTypes.bool,
  disableGutters: PropTypes.bool,
  children: PropTypes.node
})

export default InnerContainer
