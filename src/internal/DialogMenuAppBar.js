// Platform
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import exact from 'prop-types-exact'
// Components
import Container from '../Container'
import ShowOnScreenSize from './ShownOnScreenSize'
// Material-UI
import AppBarButton from './AppBarButton'
import BaseAppBar from './BaseAppBar'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Slide from '@material-ui/core/Slide'
import { makeStyles } from '@material-ui/styles'
// Helpers
import FontWeight from '../helpers/FontWeight'
import getFontSize from '../helpers/getFontSize'
import getSpacing from '../helpers/getSpacing'

const useStyles = makeStyles({
  menuItemText: {
    fontSize: getFontSize(3),
    fontWeight: FontWeight.Regular
  },
  dialogMenuItems: {
    marginTop: getSpacing(5)
  },
  menuLink: {
    justifyContent: 'flex-end',
    paddingRight: 0
  }
})

const Transition = props => <Slide direction="down" {...props} />

const DialogMenuBar = ({ menuItems, openMenuLogo, closeMenuLogo, logo }) => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)
  const openMenu = () => setOpen(true)

  return (
    <>
      <ShowOnScreenSize size="small">
        <BaseAppBar location="top">
          <AppBarButton
            side="left"
            icon={
              <>
                {openMenuLogo}
                <KeyboardArrowDownIcon />
              </>
            }
            onClick={openMenu}
          />
        </BaseAppBar>

        <Dialog
          fullScreen
          open={open}
          onClose={closeMenu}
          TransitionComponent={Transition}
        >
          <BaseAppBar location="top">
            <AppBarButton
              side="left"
              icon={
                <>
                  {closeMenuLogo}
                  <KeyboardArrowUpIcon />
                </>
              }
              onClick={closeMenu}
            />
          </BaseAppBar>

          <Container disableGutters={true}>
            <List component="nav" className={classes.dialogMenuItems}>
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
          </Container>
        </Dialog>
      </ShowOnScreenSize>
      <ShowOnScreenSize size="not-small">
        <BaseAppBar location="top">
          {logo}
          <nav>
            {menuItems.map(menuItem => (
              <Button
                key={menuItem.text}
                className={classes.menuLink}
                variant="text"
                onClick={menuItem.onClick}
              >
                {menuItem.text}
              </Button>
            ))}
          </nav>
        </BaseAppBar>
      </ShowOnScreenSize>
    </>
  )
}

const itemPropType = PropTypes.shape({
  text: PropTypes.string,
  onClick: PropTypes.func
})

DialogMenuBar.propTypes = exact({
  menuItems: PropTypes.arrayOf(itemPropType).isRequired,
  openMenuLogo: PropTypes.element,
  closeMenuLogo: PropTypes.element,
  logo: PropTypes.element
})

export default DialogMenuBar
