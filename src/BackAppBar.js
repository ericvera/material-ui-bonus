// Framework
import React from 'react'
// Components
import BackButton from './BackButton'
// Material-UI
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

const BackAppBar = ({ onClick }) => (
  <AppBar>
    <Toolbar>
      <BackButton onClick={onClick} />
    </Toolbar>
  </AppBar>
)

export default BackAppBar
