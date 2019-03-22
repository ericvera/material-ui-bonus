// Framework
import React from 'react'
import PropTypes from 'prop-types'
// Material-UI
import MaterialUIList from '@material-ui/core/List'
import { makeStyles } from '@material-ui/styles'
// Helpers
import getSpacing from './helpers/getSpacing'

const useStyles = makeStyles({
  list: {
    marginTop: getSpacing(1)
  }
})

const List = ({ children, ...others }) => {
  const classes = useStyles()

  return (
    <MaterialUIList className={classes.list} {...others}>
      {children}
    </MaterialUIList>
  )
}

export default List
