// Framework
import React from 'react'
import PropTypes from 'prop-types'
// Material-UI
import Typography from '@material-ui/core/Typography'
// Helpers
import useMarginStyles from './helpers/useMarginStyles'

const Heading = ({
  level = '1',
  marginTopLevel = '0',
  marginBottomLevel = '0',
  children
}) => {
  const marginClassName = useMarginStyles(marginTopLevel, marginBottomLevel)

  return (
    <Typography variant={`h${level}`} className={marginClassName}>
      {children}
    </Typography>
  )
}

Heading.propTypes = {
  level: PropTypes.oneOf(['1', '2', '3']),
  marginTopLevel: PropTypes.oneOf(['0', '1', '2', '3', '4', '5', '6', '7']),
  marginBottomLevel: PropTypes.oneOf(['0', '1', '2', '3', '4', '5', '6', '7'])
}

export default Heading
