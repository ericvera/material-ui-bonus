// Framework
import React from 'react'
import PropTypes from 'prop-types'
import exact from 'prop-types-exact'
// Material-UI
import FormHelperText from '@material-ui/core/FormHelperText'
import Typography from '@material-ui/core/Typography'
// Helpers
import useMarginStyles, { MarginPropTypes } from './helpers/useMarginStyles'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  inline: {
    display: 'inline'
  }
})

const Text = ({
  children,
  inline = false,
  marginTopLevel = '0',
  marginBottomLevel = '0',
  variant = 'body'
}) => {
  const marginClassName = useMarginStyles(marginTopLevel, marginBottomLevel)

  let classNames = [marginClassName]

  if (inline) {
    const classes = useStyles()
    classNames.push(classes.inline)
  }

  if (variant === 'error') {
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
      variant={variant === 'sub-text' ? 'body2' : 'body1'}
      className={classNames.join(' ')}
      children={children}
    />
  )
}

Text.propTypes = exact({
  children: PropTypes.node,
  inline: PropTypes.bool,
  marginBottomLevel: MarginPropTypes,
  marginTopLevel: MarginPropTypes,
  variant: PropTypes.oneOf(['body', 'sub-text', 'error'])
})

export default Text
