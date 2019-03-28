// Framework
import React from 'react'
import PropTypes from 'prop-types'
// Components
import BaseAppBar from './internal/BaseAppBar'
import MenuAppBar from './internal/MenuAppBar'

const AppBar = ({
  location = 'top',
  leftButtonIcon = 'back',
  leftButtonOnClick,
  middleImage,
  menuImage,
  menuItems,
  bottomLeftItem,
  bottomRightItem,
  children
}) => {
  if (menuItems || bottomLeftItem || bottomRightItem) {
    return (
      <MenuAppBar
        menuItems={menuItems}
        bottomLeftItem={bottomLeftItem}
        bottomRightItem={bottomRightItem}
        menuImage={menuImage}
        middleImage={middleImage}
      />
    )
  }

  return (
    <BaseAppBar
      location={location}
      leftButtonIcon={leftButtonIcon}
      leftButtonOnClick={leftButtonOnClick}
      middleImage={middleImage}
    >
      {children}
    </BaseAppBar>
  )
}

const itemPropType = PropTypes.shape({
  text: PropTypes.string,
  onClick: PropTypes.func
})

AppBar.propTypes = {
  location: PropTypes.oneOf(['top', 'bottom']),
  leftButtonIcon: PropTypes.oneOf(['back', 'close', 'menu']),
  leftButtonOnClick: PropTypes.func,
  middleImage: PropTypes.element,
  /*  */
  menuItems: PropTypes.arrayOf(itemPropType),
  menuImage: PropTypes.element,
  bottomLeftItem: itemPropType,
  bottomRightItem: itemPropType,
  menuImage: PropTypes.node,
  middleImage: PropTypes.node
}

export default AppBar
