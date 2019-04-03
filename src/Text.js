// Framework
import React from 'react'
import PropTypes from 'prop-types'
import exact from 'prop-types-exact'
// Material-UI
import FormHelperText from '@material-ui/core/FormHelperText'
import Typography from '@material-ui/core/Typography'
// Helpers
import useMarginStyles, { MarginPropTypes } from './helpers/useMarginStyles'

const Text = ({
  marginTopLevel = '0',
  marginBottomLevel = '0',
  variant = 'body',
  children
}) => {
  const marginClassName = useMarginStyles(marginTopLevel, marginBottomLevel)

  if (variant === 'error') {
    return (
      <FormHelperText
        children={children}
        error={true}
        className={marginClassName}
      />
    )
  }

  return (
    <Typography
      component={React.Children.count(children) > 1 ? 'div' : 'p'}
      variant={variant === 'sub-text' ? 'body2' : 'body1'}
      className={marginClassName}
      children={children}
    />
  )
}

Text.propTypes = exact({
  children: PropTypes.node,
  marginBottomLevel: MarginPropTypes,
  marginTopLevel: MarginPropTypes,
  variant: PropTypes.oneOf(['body', 'sub-text', 'error'])
})

export default Text
