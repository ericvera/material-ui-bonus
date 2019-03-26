// Framework
import React from 'react'
// Material-UI
import MaterialUIList from '@material-ui/core/List'
import { makeStyles } from '@material-ui/styles'
// Helpers
import getSpacing from './helpers/getSpacing'

const useStyles = makeStyles({
  list: {
    marginTop: getSpacing(3)
  }
})

const List = ({ children }) => {
  const classes = useStyles()

  return (
    <MaterialUIList disablePadding={true} className={classes.list}>
      {children}
    </MaterialUIList>
  )
}

export default List
