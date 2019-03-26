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
  marginBottomLevel = '0',
  disabled,
  onChange,
  value,
  id,
  autoFocus,
  type,
  onBlur,
  error,
  helperText
}) => {
  const marginClassName = useMarginStyles(marginTopLevel, marginBottomLevel)

  return (
    <MaterialUITextField
      fullWidth={true}
      disabled={disabled}
      value={value}
      onChange={onChange}
      label={label}
      placeholder={placeholder}
      className={marginClassName}
      id={id}
      autoFocus={autoFocus}
      type={type}
      onBlur={onBlur}
      error={error}
      helperText={helperText}
    />
  )
}

TextField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string,
  id: PropTypes.string,
  autoFocus: PropTypes.bool,
  type: PropTypes.string,
  onBlur: PropTypes.func,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  marginTopLevel: PropTypes.oneOf(['0', '1', '2', '3', '4', '5', '6', '7']),
  marginBottomLevel: PropTypes.oneOf(['0', '1', '2', '3', '4', '5', '6', '7'])
}

export default TextField
