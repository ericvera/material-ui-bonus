import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import TextField from './TextField'

storiesOf('TextField', module)
  .add('default', () => (
    <TextField
      label="Label here"
      placeholder="Placeholder text"
      onChange={action('text changed')}
    />
  ))
  .add('disabled', () => (
    <TextField
      disabled={true}
      value="Unchangeable value"
      label="Label here"
      placeholder="Placeholder text"
      onChange={action('text changed')}
    />
  ))
