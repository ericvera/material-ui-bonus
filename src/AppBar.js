// Framework
import React from 'react'
import PropTypes from 'prop-types'
import exact from 'prop-types-exact'
// Helpers
import { AppBarVariantPropTypes, ColorPropTypes } from './helpers/PropTypes'
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
  variant: AppBarVariantPropTypes.isRequired,

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
  logo: PropTypes.element,
  // small screen
  openMenuIconColor: ColorPropTypes,
  closeMenuIconColor: ColorPropTypes,
  smallScreenAppBarBackgroundColor: ColorPropTypes,
  smallScreenMenuBackgroundColor: ColorPropTypes,
  smallScreenLinkTextColor: ColorPropTypes,
  // not-small screen
  notSmallScreenAppBarBackgroundColor: ColorPropTypes,
  notSmallScreenLinkTextColor: ColorPropTypes,

  /* bottom-full-button */
  content: PropTypes.node,

  /* bottom-text-button, bottom-full-button */
  buttonColor: PropTypes.string,
  buttonText: PropTypes.string
})

export default AppBar
