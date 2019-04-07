// Framework
import React from 'react'
import exact from 'prop-types-exact'
// Material-UI
import CircularProgress from '@material-ui/core/CircularProgress'
// Helpers
import { SpacingLevel } from './helpers/constants'
import { SpacingLevelPropTypes } from './helpers/PropTypes'
// Hooks
import useCenteredContentClassName from './hooks/useCenteredContentClassName'
import useMarginStyles from './hooks/useMarginStyles'

const Progress = ({
  marginTopLevel = SpacingLevel.l0,
  marginBottomLevel = SpacingLevel.l0
}) => {
  const centeredContentClassName = useCenteredContentClassName()
  const marginClassName = useMarginStyles(marginTopLevel, marginBottomLevel)

  return (
    <div className={centeredContentClassName}>
      <CircularProgress className={marginClassName} />
    </div>
  )
}

Progress.propTypes = exact({
  marginBottomLevel: SpacingLevelPropTypes,
  marginTopLevel: SpacingLevelPropTypes
})

export default Progress
