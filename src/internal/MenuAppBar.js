// Platform
import React, { useState } from 'react'
import PropTypes from 'prop-types'
// Components
import InnerContainer from './InnerContainer'
// Material-UI
import BaseAppBar from './BaseAppBar'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import { makeStyles } from '@material-ui/styles'
import FontWeight from '../helpers/FontWeight'
import getFontSize from '../helpers/getFontSize'
import getSpacing from '../helpers/getSpacing'

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

const MenuAppBar = ({
  menuItems,
  bottomLeftItem,
  bottomRightItem,
  menuImage,
  middleImage
}) => {
  const classes = useStyles()
  const [state, setState] = useState(false)

  const toggleDrawer = () => setState(!state)

  return (
    <div>
      <BaseAppBar
        leftButtonIcon="menu"
        leftButtonOnClick={toggleDrawer}
        middleImage={middleImage}
      />

      <SwipeableDrawer
        open={state}
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

MenuAppBar.propTypes = {
  menuItems: PropTypes.arrayOf(itemPropType).isRequired,
  menuImage: PropTypes.element,
  bottomLeftItem: itemPropType,
  bottomRightItem: itemPropType,
  menuImage: PropTypes.node,
  middleImage: PropTypes.node
}

export default MenuAppBar
