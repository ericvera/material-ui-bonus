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
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
// Helpers
import getSpacing from './helpers/getSpacing'

const useStyles = makeStyles({
  listItem: {
    paddingTop: getSpacing(4),
    paddingBottom: getSpacing(4)
  },
  listItemWithButton: {
    paddingTop: getSpacing(4),
    paddingBottom: getSpacing(4),
    cursor: 'pointer'
  },
  primary: { margin: 0 },
  secondary: {
    margin: 0,
    marginTop: getSpacing(3)
  },
  secondaryOnly: {
    margin: 0
  }
})

const ListItem = ({ onClick, primary, secondary, ...others }) => {
  const classes = useStyles()

  const primaryText = primary ? (
    <Typography variant="h3" className={classes.primary}>
      {primary}
    </Typography>
  ) : (
    undefined
  )
  const secondaryText = secondary ? (
    <Text className={primary ? classes.secondary : classes.secondaryOnly}>
      {secondary}
    </Text>
  ) : (
    undefined
  )
  const button = onClick ? <ChevronRightIcon /> : undefined

  return (
    <MaterialUIListItem
      className={onClick ? classes.listItemWithButton : classes.listItem}
      divider={true}
      onClick={onClick}
      {...others}
    >
      <MaterialUIListItemText disableTypography={true}>
        {primaryText}
        {secondaryText}
      </MaterialUIListItemText>
      {button}
    </MaterialUIListItem>
  )
}

export default ListItem
