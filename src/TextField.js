// Framework
import React from 'react'
import PropTypes from 'prop-types'
// Material-UI
import MaterialUITextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/styles'
// Helpers
import getSpacing from './helpers/getSpacing'

const useStyles = makeStyles({
  text: {
    marginTop: getSpacing(5)
  },
  subText: {
    marginTop: getSpacing(3)
  }
})

const TextField = ({ ...others }) => {
  const classes = useStyles()

  return <MaterialUITextField fullWidth={true} {...others} />
}

TextField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string
}

export default TextField
