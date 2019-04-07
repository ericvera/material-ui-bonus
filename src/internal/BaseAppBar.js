// Framework
import React from 'react'
import PropTypes from 'prop-types'
import exact from 'prop-types-exact'
// Material-UI
import MaterialUIAppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles } from '@material-ui/styles'
// Internal
import InnerContainer from './InnerContainer'
// Helpers
import getColor from '../helpers/getColor'
import { Color } from '../helpers/constants'
import { ColorPropTypes } from '../helpers/PropTypes'
// Hooks
import useColorClassName from '../hooks/useColorClassName'

const useStyles = makeStyles({
  bottom: {
    top: 'auto',
    bottom: 0,
    padding: 0,
    borderTopStyle: 'solid',
    borderTopColor: getColor(Color.primaryDisabled),
    borderTopWidth: 1
  }
})

const BaseAppBar = ({
  location = 'top',
  centered = false,
  children,
  backgroundColor = Color.background,
  position = 'fixed'
}) => {
  const classes = useStyles()
  const colorClassName = useColorClassName(null, backgroundColor)

  let classNames = [colorClassName]

  if (location === 'bottom') {
    classNames.push(classes.bottom)
  }

  return (
    <MaterialUIAppBar
      position={position}
      className={classNames.join(' ')}
      component={location === 'top' ? 'header' : 'footer'}
    >
      <Toolbar>
        <InnerContainer centered={centered} disableGutters={true} flex={true}>
          {children}
        </InnerContainer>
      </Toolbar>
    </MaterialUIAppBar>
  )
}

BaseAppBar.propTypes = exact({
  backgroundColor: ColorPropTypes,
  centered: PropTypes.bool,
  children: PropTypes.node,
  location: PropTypes.oneOf(['top', 'bottom']),
  position: PropTypes.oneOf(['fixed', 'absolute'])
})

export default BaseAppBar
