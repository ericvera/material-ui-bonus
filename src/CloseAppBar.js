// Framework
import React from 'react'
// Components
import CloseButton from './internal/CloseButton'
// Material-UI
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

const CloseAppBar = ({ onClick }) => (
  <AppBar>
    <Toolbar>
      <CloseButton onClick={onClick} />
    </Toolbar>
  </AppBar>
)

export default CloseAppBar
