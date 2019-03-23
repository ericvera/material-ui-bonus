// Framework
import React from 'react'
import PropTypes from 'prop-types'
// Material-UI
import MaterialUIButton from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/styles'
// Helpers
import getSpacing from './helpers/getSpacing'
import Colors from './helpers/Colors'

const useStyles = makeStyles({
  primary: {
    backgroundColor: Colors.background,
    borderColor: Colors.brand,
    color: Colors.brand
    //marginTop: getSpacing(2)
  },
  secondary: {
    backgroundColor: Colors.background,
    borderColor: Colors.secondary,
    color: Colors.secondary
    //marginTop: getSpacing(2)
  },
  confirmation: {
    backgroundColor: Colors.confirmAction,
    borderStyle: 'none',
    color: Colors.background,
    //marginTop: getSpacing(2),
    '&:hover': {
      backgroundColor: Colors.confirmAction,
      borderStyle: 'none',
      color: Colors.background
    }
  },
  centeredContainer: {
    textAlign: 'center'
  }
})

const Button = ({ centered = true, type = 'primary', ...other }) => {
  const classes = useStyles()

  const button = <MaterialUIButton className={classes[type]} {...other} />

  if (!centered) {
    return button
  }

  return <div className={classes.centeredContainer}>{button}</div>
}

Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary', 'confirmation']),
  centered: PropTypes.bool
}

export default Button
