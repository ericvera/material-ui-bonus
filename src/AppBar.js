// Framework
import React from 'react'
import PropTypes from 'prop-types'
import exact from 'prop-types-exact'
// Components
import AppBarButton from './internal/AppBarButton'
import BaseAppBar from './internal/BaseAppBar'
import DialogMenuAppBar from './internal/DialogMenuAppBar'
import MenuAppBar from './internal/MenuAppBar'

const AppBar = ({ variant, ...props }) => {
  switch (variant) {
    case 'back':
    case 'close':
      return (
        <BaseAppBar location="top">
          <AppBarButton side="left" icon={variant} {...props} />
        </BaseAppBar>
      )
    case 'drawer-menu':
      // TODO: Rename component to <DrawerMenuAppBar />
      return <MenuAppBar {...props} />
    case 'dialog-menu':
      // TODO: NEXT: Working on getting this to work
      return <DialogMenuAppBar {...props} />
    case 'bottom-full-button':
    case 'bottom-text-button':
      return <BaseAppBar location="bottom" {...props} />
  }

  throw Error(`[AppBar] Unsupported variant: ${variant}`)
}

const itemPropType = PropTypes.shape({
  text: PropTypes.string,
  onClick: PropTypes.func
})

AppBar.propTypes = exact({
  variant: PropTypes.oneOf([
    'back',
    'close',
    'drawer-menu',
    'dialog-menu',
    'bottom-full-button',
    'bottom-text-button'
  ]).isRequired,

  /* back, close */
  onClick: PropTypes.func,

  /* drawer-menu, dialog-menu */
  menuItems: PropTypes.arrayOf(itemPropType),

  /* drawer-menu */
  menuImage: PropTypes.element,
  middleImage: PropTypes.element,
  bottomLeftMenuItem: itemPropType,
  bottomRightMenuItem: itemPropType,

  /* dialog-menu */
  openMenuLogo: PropTypes.element,
  closeMenuLogo: PropTypes.element,
  logo: PropTypes.element

  /* bottom-full-button */
  /* bottom-text-button */
  //button: PropTypes.element,

  /* bottom-text-button */
  //text: PropTypes.string
})

export default AppBar
