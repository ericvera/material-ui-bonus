// Platform
import React, { useState } from 'react'
import PropTypes from 'prop-types'
//import { Link } from 'react-router-dom'
// Components
//import Logo from './Logo'
import InnerContainer from './internal/InnerContainer'
// Material-UI
import AppBar from './AppBar'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import { makeStyles } from '@material-ui/styles'
import FontWeight from './helpers/FontWeight'
import getFontSize from './helpers/getFontSize'
import getSpacing from './helpers/getSpacing'

const useStyles = makeStyles({
  iconButton: {
    paddingLeft: 0
  },
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

const DrawerMenu = ({
  menuItems,
  bottomLeftItem,
  bottomRightItem,
  menuLogo,
  appBarImage
}) => {
  const classes = useStyles()
  const [state, setState] = useState(false)

  const toggleDrawer = () => setState(!state)

  // TODO: Add logo to AppBar

  return (
    <div>
      <AppBar
        leftButtonIcon="menu-minimal"
        leftButtonOnClick={toggleDrawer}
        middleImage={appBarImage}
      />

      <SwipeableDrawer
        open={state}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.logoContainer}>
          {menuLogo && (
            <InnerContainer centered={false}>{menuLogo}</InnerContainer>
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
          {bottomLeftItem && (
            <ListItem
              key={bottomLeftItem.text}
              onClick={bottomLeftItem.onClick}
              button
              disableGutters={false}
            >
              <ListItemText primary={bottomLeftItem.text} />
            </ListItem>
          )}
          {bottomRightItem && (
            <ListItem
              key={bottomRightItem.text}
              onClick={bottomRightItem.onClick}
              button
              className={classes.bottomMenuLastButton}
            >
              <ListItemText primary={bottomRightItem.text} />
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

DrawerMenu.propTypes = {
  menuItems: PropTypes.arrayOf(itemPropType).isRequired,
  bottomLeftItem: itemPropType,
  bottomRightItem: itemPropType,
  menuLogo: PropTypes.node,
  appBarImage: PropTypes.node
}

export default DrawerMenu
