// Framework
import React from 'react'
import PropTypes from 'prop-types'
// Components
import Text from './Text'
// Material-UI
import MaterialUIListItem from '@material-ui/core/ListItem'
import MaterialUIListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/styles'
import CloseIcon from '@material-ui/icons/Close'
// Helpers
import getSpacing from './helpers/getSpacing'

const useStyles = makeStyles({
  listItem: {
    paddingTop: getSpacing(4),
    paddingBottom: getSpacing(4)
  }
})

const ListItem = ({ onClick, primary, secondary, ...others }) => {
  const classes = useStyles()

  const primaryText = primary ? (
    <Typography variant="h3">{primary}</Typography>
  ) : (
    undefined
  )
  const secondaryText = secondary ? <Text>{secondary}</Text> : undefined
  const button = onClick ? <CloseIcon /> : undefined

  return (
    <MaterialUIListItem className={classes.listItem} divider={true} {...others}>
      <MaterialUIListItemText disableTypography={true}>
        {primaryText}
        {secondaryText}
      </MaterialUIListItemText>
      {button}
    </MaterialUIListItem>
  )
}

export default ListItem
