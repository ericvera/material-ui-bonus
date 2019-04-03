// Framework
import React from 'react'
import PropTypes from 'prop-types'
import exact from 'prop-types-exact'
// Material-UI
import Typography from '@material-ui/core/Typography'
// Helpers
import useMarginStyles, { MarginPropTypes } from './helpers/useMarginStyles'

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

Heading.propTypes = exact({
  children: PropTypes.string,
  level: PropTypes.oneOf(['1', '2', '3']),
  marginBottomLevel: MarginPropTypes,
  marginTopLevel: MarginPropTypes
})

export default Heading
