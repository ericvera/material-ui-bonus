// Platform
import React from 'react'
import PropTypes from 'prop-types'
import exact from 'prop-types-exact'
// Material-UI
import BackIcon from '@material-ui/icons/ArrowBack'
import CloseIcon from '@material-ui/icons/Close'
import MaterialUIIconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/styles'
// Internal
import EmptyIcon from './EmptyIcon'
import MenuMinimalIcon from './MenuMinimalIcon'
// Helpers
import { AppBarButtonIcon, Color } from '../helpers/constants'
import { AppBarButtonIconPropTypes, ColorPropTypes } from '../helpers/PropTypes'
// Hooks
import useColorClassName from '../hooks/useColorClassName'

// TODO: Figure out if there are constants for these numbers somewhere? or make a note explaining
const useStyles = makeStyles({
  left: { marginLeft: -12, marginRight: 20 },
  right: { marginLeft: 20, marginRight: -12 }
})

const AppBarButton = ({ color = Color.primary, icon, onClick, side }) => {
  const classes = useStyles()
  const colorClassName = useColorClassName(color)

  let iconElement

  switch (icon) {
    case AppBarButtonIcon.close:
      iconElement = <CloseIcon className={colorClassName} />
      break
    case AppBarButtonIcon.back:
      iconElement = <BackIcon className={colorClassName} />
      break
    case AppBarButtonIcon.menu:
      iconElement = <MenuMinimalIcon className={colorClassName} />
      break
    case AppBarButtonIcon.empty:
      iconElement = <EmptyIcon />
      break
    default:
      iconElement = icon
      break
  }

  return (
    <MaterialUIIconButton onClick={onClick} className={classes[side]}>
      {iconElement}
    </MaterialUIIconButton>
  )
}

AppBarButton.propTypes = exact({
  color: ColorPropTypes,
  icon: PropTypes.oneOfType([PropTypes.element, AppBarButtonIconPropTypes]),
  onClick: PropTypes.func,
  side: PropTypes.oneOf(['left', 'right'])
})

export default AppBarButton
