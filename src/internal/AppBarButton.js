// Platform
import React from 'react'
import PropTypes from 'prop-types'
// Material-UI
import BackIcon from '@material-ui/icons/ArrowBack'
import CloseIcon from '@material-ui/icons/Close'
import MaterialUIIconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  left: { marginLeft: -12, marginRight: 20 }
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
  }

  return (
    <MaterialUIIconButton onClick={onClick} className={classes[side]}>
      {iconElement}
    </MaterialUIIconButton>
  )
}

AppBarButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  side: PropTypes.oneOf(['left']).isRequired,
  icon: PropTypes.oneOf(['close', 'back']).isRequired
}

export default AppBarButton
