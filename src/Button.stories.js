import React, { useImperativeHandle, useRef } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Button from './Button'

const ResetTestComponent = () => {
  const buttonRef = useRef(null)
  console.log('buttonRef:', buttonRef)

  return (
    <div>
      <Button
        ref={buttonRef}
        delay={5}
        type="confirmation"
        onClick={action('button pressed')}
      >
        Press me
      </Button>
      <Button
        type="primary"
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
  .add('progress / primary / reset', () => <ResetTestComponent />)
