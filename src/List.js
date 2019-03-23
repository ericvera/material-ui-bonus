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
    // NOTE: The desired spacing is spacing[5] from the top of the content element, but the top margin of
    //  the element already has spacing[4]
    marginTop: getSpacing(5) - getSpacing(4)
  }
})

const List = ({ children, ...others }) => {
  const classes = useStyles()

  return (
    <MaterialUIList disablePadding={true} className={classes.list} {...others}>
      {children}
    </MaterialUIList>
  )
}

export default List
