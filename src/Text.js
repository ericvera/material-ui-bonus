// Framework
import React from 'react'
import PropTypes from 'prop-types'
// Material-UI
import Typography from '@material-ui/core/Typography'
// Helpers
import useMarginStyles from './helpers/useMarginStyles'

const Text = ({
  isSubText = false,
  marginTopLevel = '0',
  marginBottomLevel = '0',
  children
}) => {
  const marginClassName = useMarginStyles(marginTopLevel, marginBottomLevel)

  return (
    <Typography
      component={React.Children.count(children) > 1 ? 'div' : 'p'}
      variant={isSubText ? 'body2' : 'body1'}
      className={marginClassName}
    >
      {children}
    </Typography>
  )
}

Text.propTypes = {
  isSubText: PropTypes.bool,
  marginTopLevel: PropTypes.oneOf(['0', '1', '2', '3', '4', '5', '6', '7']),
  marginBottomLevel: PropTypes.oneOf(['0', '1', '2', '3', '4', '5', '6', '7'])
}

export default Text
