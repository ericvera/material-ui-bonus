// Framework
import React from 'react'
// Components
import LeftToolbarIconButton from './LeftToolbarIconButton'
// Material-UI
import CloseIcon from '@material-ui/icons/Close'

const CloseButton = ({ onClick }) => (
  <LeftToolbarIconButton onClick={onClick}>
    <CloseIcon />
  </LeftToolbarIconButton>
)

export default CloseButton
