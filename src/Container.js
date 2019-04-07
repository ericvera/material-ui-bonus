// Framework
import React from 'react'
import PropTypes from 'prop-types'
import exact from 'prop-types-exact'
// Material-UI
import Toolbar from '@material-ui/core/Toolbar'
// Internal
import InnerContainer from './internal/InnerContainer'
import OuterContainer from './internal/OuterContainer'
// Helpers
import { SpacingLevel } from './helpers/constants'
import { ScreenSizePropTypes, SpacingLevelPropTypes } from './helpers/PropTypes'
// Hooks
import useCenteredContentClassName from './hooks/useCenteredContentClassName'
import useScreenSizeStyles from './hooks/useScreenSizeStyles'

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
  marginBottomLevel = SpacingLevel.l0,
  marginTopLevel = SpacingLevel.l0,
  paddingBottomLevel = SpacingLevel.l0,
  paddingTopLevel = SpacingLevel.l0,
  screenSize
}) => {
  const centeredContentClassName = useCenteredContentClassName()

  let classNames = [className]

  if (centeredContent) {
    classNames.push(centeredContentClassName)
  }

  return (
    <OuterContainer
      backgroundImage={backgroundImage}
      className={classNames.join(' ')}
      fullPage={fullPage}
      marginBottomLevel={marginBottomLevel}
      marginTopLevel={marginTopLevel}
      paddingBottomLevel={paddingBottomLevel}
      paddingTopLevel={paddingTopLevel}
      screenSize={screenSize}
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
  centeredContent: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  disableGutters: PropTypes.bool,
  fullPage: PropTypes.bool,
  hasAppBar: PropTypes.bool,
  hasBottomBar: PropTypes.bool,
  marginBottomLevel: SpacingLevelPropTypes,
  marginTopLevel: SpacingLevelPropTypes,
  paddingBottomLevel: SpacingLevelPropTypes,
  paddingTopLevel: SpacingLevelPropTypes,
  screenSize: ScreenSizePropTypes
})

export default Container
