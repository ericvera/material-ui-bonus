// Framework
import React from 'react'
import PropTypes from 'prop-types'
// Material-UI
import { default as MaterialUIButton } from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/styles'
// Helpers
import getSpacing from './helpers/getSpacing'
import Colors from './helpers/Colors'

const useStyles = makeStyles(theme => ({
  primary: {
    backgroundColor: Colors.background,
    borderColor: Colors.brand,
    color: Colors.brand,
    marginTop: getSpacing(2)
  },
  secondary: {
    marginTop: getSpacing(2)
  },
  confirmation: {
    marginTop: getSpacing(2)
  }
}))

const Button = ({ type = 'primary', ...other }) => {
  const classes = useStyles()

  return <MaterialUIButton className={classes[type]} {...other} />
}

Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary', 'confirmation'])
}

export default Button
