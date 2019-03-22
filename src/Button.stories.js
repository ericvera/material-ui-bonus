import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Button from './Button'

storiesOf('Button', module)
  .add('primary (default)', () => (
    <Button onClick={action('button pressed')}>Press me</Button>
  ))
  .add('primary disabled', () => (
    <Button disabled={true} onClick={action('button pressed')}>
      Press me
    </Button>
  ))
  .add('secondary', () => (
    <Button type="secondary" onClick={action('button pressed')}>
      Press me
    </Button>
  ))
  .add('secondary disabled', () => (
    <Button type="secondary" disabled={true} onClick={action('button pressed')}>
      Press me
    </Button>
  ))
  .add('confirmation', () => (
    <Button type="confirmation" onClick={action('button pressed')}>
      Press me
    </Button>
  ))
  .add('confirmation disabled', () => (
    <Button
      type="confirmation"
      disabled={true}
      onClick={action('button pressed')}
    >
      Press me
    </Button>
  ))
