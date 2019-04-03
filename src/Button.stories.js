import React, { useRef } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Button from './Button'

const ResetTestComponent = () => {
  const buttonRef = useRef()

  return (
    <div>
      <Button
        ref={buttonRef}
        delay={5}
        variant="confirmation"
        onClick={action('button pressed')}
      >
        Press me
      </Button>
      <Button
        variant="primary"
        onClick={() => {
          console.log('reset delay')
          buttonRef.current.resetDelay()
        }}
      >
        Reset delay
      </Button>
    </div>
  )
}

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
    <Button variant="secondary" onClick={action('button pressed')}>
      Press me
    </Button>
  ))
  .add('secondary / full width', () => (
    <Button
      variant="secondary"
      onClick={action('button pressed')}
      fullWidth={true}
    >
      Press me
    </Button>
  ))
  .add('confirmation', () => (
    <Button variant="confirmation" onClick={action('button pressed')}>
      Press me
    </Button>
  ))
  .add('progress / confirmation', () => (
    <Button delay={5} variant="confirmation" onClick={action('button pressed')}>
      Press me
    </Button>
  ))
  .add('progress / primary / reset', () => <ResetTestComponent />)
