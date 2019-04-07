// Framework
import React from 'react'
import PropTypes from 'prop-types'
import exact from 'prop-types-exact'
// Material-UI
import FormHelperText from '@material-ui/core/FormHelperText'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/styles'
// Helpers
import { SpacingLevel, TextVariant } from './helpers/constants'
import {
  SpacingLevelPropTypes,
  TextVariantPropTypes
} from './helpers/PropTypes'
// Hooks
import useMarginStyles from './hooks/useMarginStyles'

const useStyles = makeStyles({
  inline: {
    display: 'inline'
  }
})

const Text = ({
  children,
  inline = false,
  marginTopLevel = SpacingLevel.l0,
  marginBottomLevel = SpacingLevel.l0,
  variant = TextVariant.body
}) => {
  const marginClassName = useMarginStyles(marginTopLevel, marginBottomLevel)

  let classNames = [marginClassName]

  if (inline) {
    const classes = useStyles()
    classNames.push(classes.inline)
  }

  if (variant === TextVariant.error) {
    return (
      <FormHelperText
        children={children}
        error={true}
        className={classNames.join(' ')}
      />
    )
  }

  return (
    <Typography
      component={React.Children.count(children) > 1 ? 'div' : 'p'}
      variant={variant === TextVariant.subText ? 'body2' : 'body1'}
      className={classNames.join(' ')}
      children={children}
    />
  )
}

Text.propTypes = exact({
  children: PropTypes.node,
  inline: PropTypes.bool,
  marginBottomLevel: SpacingLevelPropTypes,
  marginTopLevel: SpacingLevelPropTypes,
  variant: TextVariantPropTypes
})

export default Text
