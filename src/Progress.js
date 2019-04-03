// Framework
import React from 'react'
import PropTypes from 'prop-types'
import exact from 'prop-types-exact'
// Material-UI
import CircularProgress from '@material-ui/core/CircularProgress'
// Helpers
import useMarginStyles, { MarginPropTypes } from './helpers/useMarginStyles'
import CenteredContent from './internal/CenteredContent'

const Progress = ({ marginTopLevel = '0', marginBottomLevel = '0' }) => {
  const marginClassName = useMarginStyles(marginTopLevel, marginBottomLevel)

  return (
    <CenteredContent>
      <CircularProgress className={marginClassName} />
    </CenteredContent>
  )
}

Progress.propTypes = exact({
  marginBottomLevel: MarginPropTypes,
  marginTopLevel: MarginPropTypes
})

export default Progress
