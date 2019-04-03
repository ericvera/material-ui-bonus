// Framework
import React from 'react'
import PropTypes from 'prop-types'
import exact from 'prop-types-exact'
// Internal
import InnerContainer from './internal/InnerContainer'
import OuterContainer from './internal/OuterContainer'
import { Toolbar } from '@material-ui/core'
import { MarginPropTypes } from './helpers/useMarginStyles'

const Container = ({
  backgroundImage,
  centered = true,
  children,
  disableGutters = false,
  fullPage = true,
  hasAppBar = true,
  hasBottomBar = false,
  marginTopLevel = '0',
  marginBottomLevel = '0'
}) => {
  return (
    <OuterContainer
      fullPage={fullPage}
      marginTopLevel={marginTopLevel}
      marginBottomLevel={marginBottomLevel}
      backgroundImage={backgroundImage}
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

Container.propTypes = exact({
  backgroundImage: PropTypes.string,
  centered: PropTypes.bool,
  children: PropTypes.node,
  disableGutters: PropTypes.bool,
  fullPage: PropTypes.bool,
  hasAppBar: PropTypes.bool,
  hasBottomBar: PropTypes.bool,
  marginTopLevel: MarginPropTypes,
  marginBottomLevel: MarginPropTypes
})

export default Container
