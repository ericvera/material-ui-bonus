// Framework
import React from 'react'
import PropTypes from 'prop-types'
// Material-UI
import MaterialUISnackbar from '@material-ui/core/Snackbar'

const Snackbar = ({ message, onClose, open }) => {
  return (
    <MaterialUISnackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      open={open}
      autoHideDuration={6000}
      onClose={onClose}
      message={message}
    />
  )
}

Snackbar.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
}

export default Snackbar
