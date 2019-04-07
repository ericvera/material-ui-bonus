import PropTypes from 'prop-types'
import {
  AppBarButtonIcon,
  AppBarVariant,
  ButtonVariant,
  Color,
  HeadingLevel,
  ScreenSize,
  SpacingLevel,
  TextVariant
} from './constants'

export const AppBarButtonIconPropTypes = PropTypes.oneOf(
  Object.values(AppBarButtonIcon)
)

export const AppBarVariantPropTypes = PropTypes.oneOf(
  Object.values(AppBarVariant)
)

export const ButtonVariantPropTypes = PropTypes.oneOf(
  Object.values(ButtonVariant)
)

export const ColorPropTypes = PropTypes.oneOf(Object.values(Color))

export const HeadingLevelPropTypes = PropTypes.oneOf(
  Object.values(HeadingLevel)
)

export const SpacingLevelPropTypes = PropTypes.oneOf(
  Object.values(SpacingLevel)
)

export const ScreenSizePropTypes = PropTypes.oneOf(Object.values(ScreenSize))

export const TextVariantPropTypes = PropTypes.oneOf(Object.values(TextVariant))
