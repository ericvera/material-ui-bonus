// Framework
import React from 'react'
import PropTypes from 'prop-types'
import exact from 'prop-types-exact'
// Material-UI
import MaterialUITextField from '@material-ui/core/TextField'
// Helpers
import useMarginStyles, { MarginPropTypes } from './helpers/useMarginStyles'

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
  value
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

TextField.propTypes = exact({
  autoCapitalize: PropTypes.string,
  autoFocus: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  marginBottomLevel: MarginPropTypes,
  marginTopLevel: MarginPropTypes,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string
})

export default TextField
