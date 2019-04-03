// Framework
import React from 'react'
import PropTypes from 'prop-types'
import exact from 'prop-types-exact'
// Material-UI
import MaterialUISnackbar from '@material-ui/core/Snackbar'

const Snackbar = ({ message, onClose, open }) => {
  return (
    <MaterialUISnackbar
      open={open}
      autoHideDuration={6000}
      onClose={onClose}
      message={message}
    />
  )
}

Snackbar.propTypes = exact({
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
})

export default Snackbar
