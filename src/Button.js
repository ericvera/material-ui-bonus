// Framework
import React, { forwardRef, useRef, useImperativeHandle } from 'react'
import PropTypes from 'prop-types'
import exact from 'prop-types-exact'
// Material-UI
import MaterialUIButton from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/styles'
// Internal
import ProgressButton from './internal/ProgressButton'
// Helpers
import {
  ButtonColor,
  ButtonVariant,
  Color,
  SpacingLevel
} from './helpers/constants'
import {
  ButtonVariantPropTypes,
  ColorPropTypes,
  SpacingLevelPropTypes
} from './helpers/PropTypes'
import getColor from './helpers/getColor'
import getSpacing from './helpers/getSpacing'
// Hooks
import useCenteredContentClassName from './hooks/useCenteredContentClassName'
import useMarginStyles from './hooks/useMarginStyles'
import useColorClassName from './hooks/useColorClassName'

const useStyles = makeStyles({
  textButton: {
    paddingLeft: getSpacing(SpacingLevel.l2),
    paddingRight: getSpacing(SpacingLevel.l2)
  },
  [ButtonColor.primary]: {
    backgroundColor: getColor(Color.background),
    borderColor: getColor(Color.brand),
    color: getColor(Color.brand)
  },
  [ButtonColor.secondary]: {
    backgroundColor: getColor(Color.background),
    borderColor: getColor(Color.secondary),
    color: getColor(Color.secondary)
  },
  [ButtonColor.confirmation]: {
    backgroundColor: getColor(Color.confirmAction),
    borderStyle: 'none',
    color: getColor(Color.background),
    '&:hover': {
      backgroundColor: getColor(Color.confirmAction),
      borderStyle: 'none',
      color: getColor(Color.background)
    }
  }
})

const getButtonColorClassName = color => {
  if (
    ![
      ButtonColor.primary,
      ButtonColor.secondary,
      ButtonColor.confirmAction
    ].includes(color)
  ) {
    throw Error(`[Button] Unsupported color: ${color}`)
  }

  return color
}

const Button = ({
  centered = true,
  children,
  color = ButtonColor.primary,
  delay,
  forwardedRef,
  fullWidth = false,
  marginBottomLevel = SpacingLevel.l0,
  marginTopLevel = SpacingLevel.l0,
  onClick,
  showProgress = false,
  variant = ButtonVariant.flat
}) => {
  const classes = useStyles()
  const marginClassName = useMarginStyles(marginTopLevel, marginBottomLevel)
  const centeredContentClassName = useCenteredContentClassName()
  console.log(`color: ${color}`)
  const colorClassName = useColorClassName(color)

  let classNames = [marginClassName]

  let button

  switch (variant) {
    case ButtonVariant.flat:
      classNames.push(classes[getButtonColorClassName(color)])
      button = (
        <MaterialUIButton
          className={classNames.join(' ')}
          fullWidth={fullWidth}
          onClick={onClick}
        >
          {children}
        </MaterialUIButton>
      )
      break
    case ButtonVariant.progress:
      classNames.push(classes[getButtonColorClassName(color)])
      button = (
        <ProgressButton
          ref={forwardedRef}
          delay={delay}
          className={classNames.join(' ')}
          fullWidth={fullWidth}
          onClick={onClick}
          showProgress={showProgress}
        >
          {children}
        </ProgressButton>
      )
      break
    case ButtonVariant.text:
      classNames.push(classes.textButton)

      console.log(`colorClassName: ${colorClassName}`)

      button = (
        <MaterialUIButton
          className={classNames.join(' ')}
          classes={{
            text: colorClassName
          }}
          fullWidth={fullWidth}
          onClick={onClick}
          variant="text"
        >
          {children}
        </MaterialUIButton>
      )
      break
    default:
      throw Error(`[Button] Unsupported variant: ${variant}`)
  }

  if (!centered) {
    return button
  }

  return <div className={centeredContentClassName}>{button}</div>
}

Button.propTypes = exact({
  centered: PropTypes.bool,
  children: PropTypes.node,
  color: ColorPropTypes,
  forwardedRef: PropTypes.object,
  fullWidth: PropTypes.bool,
  marginBottomLevel: SpacingLevelPropTypes,
  marginTopLevel: SpacingLevelPropTypes,
  onClick: PropTypes.func,
  variant: ButtonVariantPropTypes,
  // variant === 'progress'
  /** Delay in seconds before the button can be pressed */
  delay: PropTypes.number,
  showProgress: PropTypes.bool
})

export default forwardRef((props, ref) => (
  <Button {...props} forwardedRef={ref} />
))
