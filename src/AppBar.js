// Framework
import React from 'react'
import PropTypes from 'prop-types'
import exact from 'prop-types-exact'
// Components
import AppBarButton from './internal/AppBarButton'
import BaseAppBar from './internal/BaseAppBar'
import BottomAppBar from './internal/BottomAppBar'
import DialogMenuAppBar from './internal/DialogMenuAppBar'
import DrawerMenuAppBar from './internal/DrawerMenuAppBar'

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
      return <DrawerMenuAppBar {...props} />
    case 'dialog-menu':
      return <DialogMenuAppBar {...props} />
    case 'bottom-full-button':
    case 'bottom-text-button':
      return <BottomAppBar {...props} />
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

  /* back, close, bottom-full-button, bottom-text-button */
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
  color: PropTypes.oneOf(['background', 'transparent']),
  logo: PropTypes.element,

  /* bottom-full-button */
  content: PropTypes.node,

  /* bottom-text-button, bottom-full-button */
  buttonColor: PropTypes.string,
  buttonText: PropTypes.string
})

export default AppBar
