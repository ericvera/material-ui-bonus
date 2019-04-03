import React from 'react'
import { storiesOf } from '@storybook/react'
import Heading from './Heading'

storiesOf('Heading', module)
  .add(
    'all',
    () => (
      <>
        <Heading level="1">Hi, I am a level 1 header</Heading>
        <Heading level="2">Hi, I am a level 2 header</Heading>
        <Heading level="3">Hi, I am a level 3 header</Heading>
      </>
    ),
    {
      info: {
        disable: true
      }
    }
  )
  .add('level 1 (default)', () => (
    <Heading level="1">Hi, I am a level 1 header</Heading>
  ))
  .add('level 2', () => <Heading level="2">Hi, I am a level 2 header</Heading>)
  .add('level 3', () => <Heading level="3">Hi, I am a level 3 header</Heading>)
