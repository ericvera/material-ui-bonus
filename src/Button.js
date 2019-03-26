// Framework
import React from 'react'
import PropTypes from 'prop-types'
// Material-UI
import MaterialUIButton from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/styles'
// Helpers
import useMarginStyles from './helpers/useMarginStyles'
import Colors from './helpers/Colors'

const useStyles = makeStyles({
  primary: {
    backgroundColor: Colors.background,
    borderColor: Colors.brand,
    color: Colors.brand
  },
  secondary: {
    backgroundColor: Colors.background,
    borderColor: Colors.secondary,
    color: Colors.secondary
  },
  confirmation: {
    backgroundColor: Colors.confirmAction,
    borderStyle: 'none',
    color: Colors.background,
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

const Button = ({
  centered = true,
  marginTopLevel = '0',
  marginBottomLevel = '0',
  type = 'primary',
  ...other
}) => {
  const classes = useStyles()
  const marginClassName = useMarginStyles(marginTopLevel, marginBottomLevel)

  const button = (
    <MaterialUIButton
      className={[marginClassName, classes[type]].join(' ')}
      {...other}
    />
  )

  if (!centered) {
    return button
  }

  return <div className={classes.centeredContainer}>{button}</div>
}

Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary', 'confirmation']),
  centered: PropTypes.bool,
  marginTopLevel: PropTypes.oneOf(['0', '1', '2', '3', '4', '5', '6', '7']),
  marginBottomLevel: PropTypes.oneOf(['0', '1', '2', '3', '4', '5', '6', '7'])
}

export default Button
