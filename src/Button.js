// Framework
import React, { forwardRef, useRef, useImperativeHandle } from 'react'
import PropTypes from 'prop-types'
import exact from 'prop-types-exact'
// Material-UI
import MaterialUIButton from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/styles'
// Helpers
import useMarginStyles, { MarginPropTypes } from './helpers/useMarginStyles'
import CenteredContent from './internal/CenteredContent'
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
  }
})

const Button = ({
  centered = true,
  children,
  delay,
  forwardedRef,
  fullWidth = false,
  marginBottomLevel = '0',
  marginTopLevel = '0',
  onClick,
  variant = 'primary'
}) => {
  const classes = useStyles()
  const marginClassName = useMarginStyles(marginTopLevel, marginBottomLevel)

  const className = [marginClassName, classes[variant]].join(' ')

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
        ref={forwardedRef}
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

  return <CenteredContent>{button}</CenteredContent>
}

Button.propTypes = exact({
  centered: PropTypes.bool,
  children: PropTypes.node,
  /** Delay in seconds before the button can be pressed */
  delay: PropTypes.number,
  forwardedRef: PropTypes.object,
  fullWidth: PropTypes.bool,
  marginBottomLevel: MarginPropTypes,
  marginTopLevel: MarginPropTypes,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'secondary', 'confirmation'])
})

export default forwardRef((props, ref) => (
  <Button {...props} forwardedRef={ref} />
))
