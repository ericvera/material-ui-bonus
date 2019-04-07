// Framework
import React from 'react'
import PropTypes from 'prop-types'
import exact from 'prop-types-exact'
// Material-UI
import MaterialUIList from '@material-ui/core/List'
import { makeStyles } from '@material-ui/styles'
// Helpers
import { SpacingLevel } from './helpers/constants'
import getSpacing from './helpers/getSpacing'

const useStyles = makeStyles({
  list: {
    marginTop: getSpacing(SpacingLevel.l3)
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

List.propTypes = exact({
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
})

export default List
