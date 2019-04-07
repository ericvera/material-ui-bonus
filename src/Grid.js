// Framework
import React from 'react'
import PropTypes from 'prop-types'
import exact from 'prop-types-exact'
// Material-UI
import MaterialUIGrid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/styles'
// Helpers
import { SpacingLevel } from './helpers/constants'
import getSpacing from './helpers/getSpacing'

const useStyles = makeStyles({
  gridItem: {
    paddingLeft: getSpacing(SpacingLevel.l2),
    paddingRight: getSpacing(SpacingLevel.l2),
    width: '100%'
  },
  centeredContent: {
    textAlign: 'center'
  }
})

const Grid = ({ centeredContent = true, children, columns = '3' }) => {
  const classes = useStyles()

  if (columns != '3' || React.Children.count(children) != columns) {
    throw Error(`[Grid] Grid only supports 3 columns at the moment`)
  }

  let classNames = [classes.gridItem]

  if (centeredContent) {
    classNames.push(classes.centeredContent)
  }

  return (
    <MaterialUIGrid container>
      {React.Children.map(children, child => {
        return (
          <MaterialUIGrid item sm={4} className={classNames.join(' ')}>
            {child}
          </MaterialUIGrid>
        )
      })}
    </MaterialUIGrid>
  )
}

Grid.propTypes = exact({
  centeredContent: PropTypes.bool,
  children: PropTypes.node,
  columns: PropTypes.oneOf(['3'])
})

export default Grid
