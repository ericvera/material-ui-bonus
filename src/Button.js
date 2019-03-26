// Framework
import React, { useRef, forwardRef, useImperativeHandle } from 'react'
import PropTypes from 'prop-types'
// Material-UI
import MaterialUIButton from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/styles'
// Helpers
import useMarginStyles from './helpers/useMarginStyles'
import Colors from './helpers/Colors'
import ProgressButton from './internal/ProgressButton'

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

const Button = (
  {
    delay,
    centered = true,
    fullWidth = false,
    marginTopLevel = '0',
    marginBottomLevel = '0',
    type = 'primary',
    onClick,
    children
  },
  ref
) => {
  const classes = useStyles()
  const marginClassName = useMarginStyles(marginTopLevel, marginBottomLevel)

  const progressButtonRef = useRef()

  useImperativeHandle(ref, () => ({
    resetDelay: () => {
      progressButtonRef.current.resetDelay()
    }
  }))

  const className = [marginClassName, classes[type]].join(' ')

  let button = (
    <MaterialUIButton
      className={className}
      fullWidth={fullWidth}
      onClick={onClick}
    >
      {children}
    </MaterialUIButton>
  )

  if (delay) {
    button = (
      <ProgressButton
        ref={progressButtonRef}
        delay={delay}
        className={className}
        fullWidth={fullWidth}
        onClick={onClick}
      >
        {children}
      </ProgressButton>
    )
  }

  if (!centered) {
    return button
  }

  return <div className={classes.centeredContainer}>{button}</div>
}

Button.propTypes = {
  onClick: PropTypes.func,
  /** Delay in seconds before the button can be pressed */
  delay: PropTypes.number,
  fullWidth: PropTypes.bool,
  type: PropTypes.oneOf(['primary', 'secondary', 'confirmation']),
  centered: PropTypes.bool,
  marginTopLevel: PropTypes.oneOf(['0', '1', '2', '3', '4', '5', '6', '7']),
  marginBottomLevel: PropTypes.oneOf(['0', '1', '2', '3', '4', '5', '6', '7'])
}

export default forwardRef(Button)
