// Framework
import React from 'react'
import PropTypes from 'prop-types'
// Material-UI
import MaterialUITextField from '@material-ui/core/TextField'
// Helpers
import useMarginStyles from './helpers/useMarginStyles'

const TextField = ({
  label,
  placeholder,
  marginTopLevel = '0',
  marginBottomLevel = '0'
}) => {
  const marginClassName = useMarginStyles(marginTopLevel, marginBottomLevel)

  return (
    <MaterialUITextField
      fullWidth={true}
      label={label}
      placeholder={placeholder}
      className={marginClassName}
    />
  )
}

TextField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string,
  marginTopLevel: PropTypes.oneOf(['0', '1', '2', '3', '4', '5', '6', '7']),
  marginBottomLevel: PropTypes.oneOf(['0', '1', '2', '3', '4', '5', '6', '7'])
}

export default TextField
