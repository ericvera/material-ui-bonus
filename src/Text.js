// Framework
import React from 'react'
import PropTypes from 'prop-types'
// Material-UI
import FormHelperText from '@material-ui/core/FormHelperText'
import Typography from '@material-ui/core/Typography'
// Helpers
import useMarginStyles from './helpers/useMarginStyles'

const Text = ({
  marginTopLevel = '0',
  marginBottomLevel = '0',
  type = 'body',
  children
}) => {
  const marginClassName = useMarginStyles(marginTopLevel, marginBottomLevel)

  if (type === 'helper') {
    return <FormHelperText children={children} className={marginClassName} />
  }

  return (
    <Typography
      component={React.Children.count(children) > 1 ? 'div' : 'p'}
      variant={type === 'sub-text' ? 'body2' : 'body1'}
      className={marginClassName}
      children={children}
    />
  )
}

Text.propTypes = {
  marginBottomLevel: PropTypes.oneOf(['0', '1', '2', '3', '4', '5', '6', '7']),
  marginTopLevel: PropTypes.oneOf(['0', '1', '2', '3', '4', '5', '6', '7']),
  type: PropTypes.oneOf(['body', 'sub-text', 'helper'])
}

export default Text
