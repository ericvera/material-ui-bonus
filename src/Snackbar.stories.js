// Framework
import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
// Components
import Container from './Container'
import Snackbar from './Snackbar'

const SnackbarSample1 = () => {
  const [open, setOpen] = useState(true)

  return (
    <Container>
      <Snackbar
        message="Message goes here"
        open={open}
        onClose={() => {
          setOpen(false)
        }}
      />
    </Container>
  )
}

storiesOf('Snackbar [NoStoryshot]', module).add('default', () => (
  <SnackbarSample1 />
))
