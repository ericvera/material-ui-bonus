// Platform
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import exact from 'prop-types-exact'
// Components
import AppBarButton from './AppBarButton'
import BaseAppBar from './BaseAppBar'
import InnerContainer from './InnerContainer'
// Helpers
import FontWeight from '../helpers/FontWeight'
import getFontSize from '../helpers/getFontSize'
import getSpacing from '../helpers/getSpacing'
// Material-UI
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  logoContainer: {
    height: getSpacing(8),
    display: 'flex',
    alignItems: 'center'
  },
  mainMenu: {
    width: 304,
    flex: 1
  },
  bottomMenu: {
    display: 'flex',
    paddingBottom: 0
  },
  bottomMenuLastButton: {
    textAlign: 'right'
  },
  menuItemText: {
    fontSize: getFontSize(3),
    fontWeight: FontWeight.Regular
  }
})

const MenuAppBar = ({
  menuItems,
  bottomLeftMenuItem,
  bottomRightMenuItem,
  middleImage,
  menuImage
}) => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  const toggleDrawer = () => setOpen(!open)

  return (
    <div>
      <BaseAppBar location="top">
        <AppBarButton side="left" icon="menu" onClick={toggleDrawer} />
        {middleImage}
        <AppBarButton side="right" icon="empty" />
      </BaseAppBar>

      <SwipeableDrawer
        open={open}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.logoContainer}>
          {menuImage && (
            <InnerContainer centered={false}>{menuImage}</InnerContainer>
          )}
        </div>

        <List component="nav" className={classes.mainMenu}>
          {menuItems.map(menuItem => (
            <ListItem
              key={menuItem.text}
              onClick={menuItem.onClick}
              button
              disableGutters={false}
            >
              <ListItemText
                primary={menuItem.text}
                classes={{ primary: classes.menuItemText }}
              />
            </ListItem>
          ))}
        </List>

        <List component="nav" className={classes.bottomMenu}>
          {bottomLeftMenuItem && (
            <ListItem
              key={bottomLeftMenuItem.text}
              onClick={bottomLeftMenuItem.onClick}
              button
              disableGutters={false}
            >
              <ListItemText primary={bottomLeftMenuItem.text} />
            </ListItem>
          )}
          {bottomRightMenuItem && (
            <ListItem
              key={bottomRightMenuItem.text}
              onClick={bottomRightMenuItem.onClick}
              button
              className={classes.bottomMenuLastButton}
            >
              <ListItemText primary={bottomRightMenuItem.text} />
            </ListItem>
          )}
        </List>
      </SwipeableDrawer>
    </div>
  )
}

const itemPropType = PropTypes.shape({
  text: PropTypes.string,
  onClick: PropTypes.func
})

MenuAppBar.propTypes = exact({
  middleImage: PropTypes.element,
  menuImage: PropTypes.element,
  menuItems: PropTypes.arrayOf(itemPropType).isRequired,
  bottomLeftMenuItem: itemPropType,
  bottomRightMenuItem: itemPropType
})

export default MenuAppBar
