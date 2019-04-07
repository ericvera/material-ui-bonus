// Framework
import React from 'react'
import PropTypes from 'prop-types'
import exact from 'prop-types-exact'
// Material-UI
import Typography from '@material-ui/core/Typography'
// Helpers
import { HeadingLevel, SpacingLevel } from './helpers/constants'
import {
  HeadingLevelPropTypes,
  SpacingLevelPropTypes
} from './helpers/PropTypes'
// Hooks
import useMarginStyles from './hooks/useMarginStyles'

const headingLevelToVariant = {
  [HeadingLevel.l1]: 'h1',
  [HeadingLevel.l2]: 'h2',
  [HeadingLevel.l3]: 'h3'
}

const Heading = ({
  level = HeadingLevel.l1,
  marginTopLevel = SpacingLevel.l0,
  marginBottomLevel = SpacingLevel.l0,
  children
}) => {
  const marginClassName = useMarginStyles(marginTopLevel, marginBottomLevel)

  return (
    <Typography
      variant={headingLevelToVariant[level]}
      className={marginClassName}
    >
      {children}
    </Typography>
  )
}

Heading.propTypes = exact({
  children: PropTypes.string,
  level: HeadingLevelPropTypes,
  marginBottomLevel: SpacingLevelPropTypes,
  marginTopLevel: SpacingLevelPropTypes
})

export default Heading
