import React from 'react'
import { storiesOf } from '@storybook/react'
import Heading from './Heading'

storiesOf('Heading', module)
  .add(
    'all',
    () => (
      <>
        <Heading>Hi, I am a level 1 header</Heading>
        <Heading level="l2">Hi, I am a level 2 header</Heading>
        <Heading level="l3">Hi, I am a level 3 header</Heading>
      </>
    ),
    {
      info: {
        disable: true
      }
    }
  )
  .add('level 1 (default)', () => <Heading>Hi, I am a level 1 header</Heading>)
  .add('level 2', () => <Heading level="l2">Hi, I am a level 2 header</Heading>)
  .add('level 3', () => <Heading level="l3">Hi, I am a level 3 header</Heading>)
  .add('custom color (brand)', () => (
    <Heading color="brand">Hi, I have the color of your brand :)</Heading>
  ))
