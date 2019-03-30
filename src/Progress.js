// Framework
import React from 'react'
import PropTypes from 'prop-types'
// Material-UI
import CircularProgress from '@material-ui/core/CircularProgress'
// Helpers
import useMarginStyles from './helpers/useMarginStyles'
import CenteredContent from './internal/CenteredContent'

const Progress = ({ marginTopLevel = '0', marginBottomLevel = '0' }) => {
  const marginClassName = useMarginStyles(marginTopLevel, marginBottomLevel)

  return (
    <CenteredContent>
      <CircularProgress className={marginClassName} />
    </CenteredContent>
  )
}

Progress.propTypes = {
  marginTopLevel: PropTypes.oneOf(['0', '1', '2', '3', '4', '5', '6', '7']),
  marginBottomLevel: PropTypes.oneOf(['0', '1', '2', '3', '4', '5', '6', '7'])
}

export default Progress
