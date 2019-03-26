// Framework
import React from 'react'
import PropTypes from 'prop-types'
// Internal
import InnerContainer from './internal/InnerContainer'
import OuterContainer from './internal/OuterContainer'
import { Toolbar } from '@material-ui/core'

const Container = ({
  fullPage = true,
  marginTopLevel = '0',
  marginBottomLevel = '0',
  centered = true,
  disableGutters = false,
  hasAppBar = true,
  hasBottomBar = false,
  children
}) => {
  return (
    <OuterContainer
      fullPage={fullPage}
      marginTopLevel={marginTopLevel}
      marginBottomLevel={marginBottomLevel}
    >
      {/* Hack to occupy the needed space as Toolbar resizes based on screen size */}
      {hasAppBar ? <Toolbar /> : null}
      <InnerContainer centered={centered} disableGutters={disableGutters}>
        {children}
      </InnerContainer>
      {/* Hack to occupy the needed space as Toolbar resizes based on screen size */}
      {hasBottomBar ? <Toolbar /> : null}
    </OuterContainer>
  )
}

Container.propTypes = {
  centered: PropTypes.bool, //Internal
  disableGutters: PropTypes.bool, //Internal
  fullPage: PropTypes.bool, //External
  marginTopLevel: PropTypes.oneOf(['0', '1', '2', '3', '4', '5', '6', '7']), //External
  marginBottomLevel: PropTypes.oneOf(['0', '1', '2', '3', '4', '5', '6', '7']) //External
}

export default Container
