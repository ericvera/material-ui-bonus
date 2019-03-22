// Framework
import React from 'react'
// Components
import LeftToolbarIconButton from './LeftToolbarIconButton'
// Material-UI
import BackIcon from '@material-ui/icons/ArrowBack'

const BackButton = ({ onClick }) => (
  <LeftToolbarIconButton onClick={onClick}>
    <BackIcon />
  </LeftToolbarIconButton>
)

export default BackButton
