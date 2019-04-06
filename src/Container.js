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
import { PaddingPropTypes } from './helpers/usePaddingStyles'
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
  marginBottomLevel = '0',
  marginTopLevel = '0',
  paddingBottomLevel = '0',
  paddingTopLevel = '0',
  screenSize
}) => {
  let content = children

  if (centeredContent) {
    content = <CenteredContent>{content}</CenteredContent>
  }

  content = (
    <OuterContainer
      backgroundImage={backgroundImage}
      className={className}
      fullPage={fullPage}
      marginBottomLevel={marginBottomLevel}
      marginTopLevel={marginTopLevel}
      paddingBottomLevel={paddingBottomLevel}
      paddingTopLevel={paddingTopLevel}
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
  className: PropTypes.string,
  disableGutters: PropTypes.bool,
  fullPage: PropTypes.bool,
  hasAppBar: PropTypes.bool,
  hasBottomBar: PropTypes.bool,
  marginBottomLevel: MarginPropTypes,
  marginTopLevel: MarginPropTypes,
  paddingBottomLevel: PaddingPropTypes,
  paddingTopLevel: PaddingPropTypes,
  screenSize: PropTypes.oneOf(['small', 'not-small'])
})

export default Container
