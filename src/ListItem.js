// Framework
import React from 'react'
import PropTypes from 'prop-types'
import exact from 'prop-types-exact'
// Material-UI
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import MaterialUIListItem from '@material-ui/core/ListItem'
import MaterialUIListItemText from '@material-ui/core/ListItemText'
import { makeStyles } from '@material-ui/styles'
// Public
import Heading from './Heading'
import Text from './Text'
// Helpers
import { SpacingLevel } from './helpers/constants'
import getSpacing from './helpers/getSpacing'

const useStyles = makeStyles({
  listItem: {
    paddingTop: getSpacing(SpacingLevel.l4),
    paddingBottom: getSpacing(SpacingLevel.l4)
  },
  listItemWithButton: {
    paddingTop: getSpacing(SpacingLevel.l4),
    paddingBottom: getSpacing(SpacingLevel.l4),
    cursor: 'pointer'
  }
})

const ListItem = ({ onClick, primary, secondary, divider = true }) => {
  const classes = useStyles()

  const primaryText = primary ? (
    <Heading level="l3">{primary}</Heading>
  ) : (
    undefined
  )
  const secondaryText = secondary ? (
    <Text marginTopLevel={primary ? 'l3' : 'l0'}>{secondary}</Text>
  ) : (
    undefined
  )
  const button = onClick ? <ChevronRightIcon /> : undefined

  return (
    <MaterialUIListItem
      className={onClick ? classes.listItemWithButton : classes.listItem}
      divider={divider}
      onClick={onClick}
    >
      <MaterialUIListItemText disableTypography={true}>
        {primaryText}
        {secondaryText}
      </MaterialUIListItemText>
      {button}
    </MaterialUIListItem>
  )
}

ListItem.propTypes = exact({
  divider: PropTypes.bool,
  primary: PropTypes.string,
  secondary: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  onClick: PropTypes.func
})

export default ListItem
