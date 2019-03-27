// Framework
import React from 'react'
import PropTypes from 'prop-types'
// Material-UI
import MaterialUITextField from '@material-ui/core/TextField'
// Helpers
import useMarginStyles from './helpers/useMarginStyles'

const TextField = ({
  autoCapitalize,
  autoFocus,
  disabled,
  error,
  helperText,
  id,
  label,
  marginBottomLevel = '0',
  marginTopLevel = '0',
  onBlur,
  onChange,
  placeholder,
  type,
  value,
}) => {
  const marginClassName = useMarginStyles(marginTopLevel, marginBottomLevel)

  return (
    <MaterialUITextField
      autoCapitalize={autoCapitalize}
      autoFocus={autoFocus}
      className={marginClassName}
      disabled={disabled}
      error={error}
      fullWidth={true}
      helperText={helperText}
      id={id}
      label={label}
      onBlur={onBlur}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      value={value}
    />
  )
}

TextField.propTypes = {
  autoCapitalize: PropTypes.string,
  autoFocus: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  id: PropTypes.string,
  helperText: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  marginBottomLevel: PropTypes.oneOf(['0', '1', '2', '3', '4', '5', '6', '7']),
  marginTopLevel: PropTypes.oneOf(['0', '1', '2', '3', '4', '5', '6', '7']),
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.string
}

export default TextField
