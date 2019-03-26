import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Button from './Button'

storiesOf('Button', module)
  .add('primary (default)', () => (
    <Button onClick={action('button pressed')}>Press me</Button>
  ))
  .add('primary - not centered', () => (
    <Button centered={false} onClick={action('button pressed')}>
      Press me
    </Button>
  ))
  .add('secondary', () => (
    <Button type="secondary" onClick={action('button pressed')}>
      Press me
    </Button>
  ))
  .add('secondary / full width', () => (
    <Button
      type="secondary"
      onClick={action('button pressed')}
      fullWidth={true}
    >
      Press me
    </Button>
  ))
  .add('confirmation', () => (
    <Button type="confirmation" onClick={action('button pressed')}>
      Press me
    </Button>
  ))
  .add('progress / confirmation', () => (
    <Button delay={5} type="confirmation" onClick={action('button pressed')}>
      Press me
    </Button>
  ))
