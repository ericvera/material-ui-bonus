import React from 'react'
import PropTypes from 'prop-types'
import exact from 'prop-types-exact'
// Material-UI
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  small: {
    display: 'flex',

    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  'not-small': {
    display: 'none',

    [theme.breakpoints.up('sm')]: {
      display: 'flex'
    }
  }
}))

const ShowOnScreenSize = ({ size = 'small', children }) => {
  const classes = useStyles()

  return <div className={classes[size]}>{children}</div>
}

ShowOnScreenSize.propTypes = exact({
  children: PropTypes.node,
  size: PropTypes.oneOf(['small', 'not-small'])
})

export default ShowOnScreenSize
