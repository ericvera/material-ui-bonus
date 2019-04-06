// Framework
import React from 'react'
import PropTypes from 'prop-types'
import exact from 'prop-types-exact'
// Components
import CenteredContent from './internal/CenteredContent'
import InnerContainer from './internal/InnerContainer'
import OuterContainer from './internal/OuterContainer'
// Helpers
import { MarginPropTypes } from './helpers/useMarginStyles'
// Material-UI
import Toolbar from '@material-ui/core/Toolbar'
import ShowOnScreenSize from './internal/ShownOnScreenSize'

const Container = ({
  backgroundImage,
  centered = true,
  centeredContent = false,
  children,
  className,
  disableGutters = false,
  fullPage = true,
  hasAppBar = true,
  hasBottomBar = false,
  marginTopLevel = '0',
  marginBottomLevel = '0',
  screenSize
}) => {
  let content = children

  if (centeredContent) {
    content = <CenteredContent>{content}</CenteredContent>
  }

  content = (
    <OuterContainer
      className={className}
      fullPage={fullPage}
      marginTopLevel={marginTopLevel}
      marginBottomLevel={marginBottomLevel}
      backgroundImage={backgroundImage}
    >
      {/* Hack to occupy the needed space as Toolbar resizes based on screen size */}
      {hasAppBar ? <Toolbar /> : null}
      <InnerContainer centered={centered} disableGutters={disableGutters}>
        {content}
      </InnerContainer>
      {/* Hack to occupy the needed space as Toolbar resizes based on screen size */}
      {hasBottomBar ? <Toolbar /> : null}
    </OuterContainer>
  )

  if (screenSize) {
    content = <ShowOnScreenSize size={screenSize}>{content}</ShowOnScreenSize>
  }

  return content
}

Container.propTypes = exact({
  backgroundImage: PropTypes.string,
  centered: PropTypes.bool,
  centeredContent: PropTypes.bool,
  children: PropTypes.node,
  disableGutters: PropTypes.bool,
  fullPage: PropTypes.bool,
  hasAppBar: PropTypes.bool,
  hasBottomBar: PropTypes.bool,
  marginTopLevel: MarginPropTypes,
  marginBottomLevel: MarginPropTypes,
  screenSize: PropTypes.oneOf(['small', 'not-small'])
})

export default Container
