// Platform
import React from 'react'
import PropTypes from 'prop-types'
import exact from 'prop-types-exact'
// Components
import EmptyIcon from './EmptyIcon'
import MenuMinimalIcon from './MenuMinimalIcon'
// Material-UI
import BackIcon from '@material-ui/icons/ArrowBack'
import CloseIcon from '@material-ui/icons/Close'
import MaterialUIIconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  left: { marginLeft: -12, marginRight: 20 },
  right: { marginLeft: 20, marginRight: -12 }
})

const AppBarButton = ({ onClick, icon, side }) => {
  const classes = useStyles()

  let iconElement

  switch (icon) {
    case 'close':
      iconElement = <CloseIcon />
      break
    case 'back':
      iconElement = <BackIcon />
      break
    case 'menu':
      iconElement = <MenuMinimalIcon />
      break
    case 'empty':
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
  icon: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.oneOf(['close', 'back', 'menu', 'empty'])
  ]),
  onClick: PropTypes.func,
  side: PropTypes.oneOf(['left', 'right'])
})

export default AppBarButton
