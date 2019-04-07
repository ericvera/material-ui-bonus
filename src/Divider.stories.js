import React from 'react'
import { storiesOf } from '@storybook/react'
import Heading from './Heading'
import Divider from './Divider'

storiesOf('Divider', module)
  .add(
    'centered with top margin',
    () => (
      <>
        <Heading>Hi, I am a level 1 header</Heading>
        <Divider marginTopLevel="l3" />
        <Heading level="l2">Hi, I am a level 2 header</Heading>
      </>
    ),
    {
      info: {
        disable: true
      }
    }
  )
  .add(
    'not centered',
    () => (
      <>
        <Heading>Hi, I am a level 1 header</Heading>
        <Divider centered={false} marginTopLevel="l5" marginBottomLevel="l5" />
        <Heading level="l2">Hi, I am a level 2 header</Heading>
      </>
    ),
    {
      info: {
        disable: true
      }
    }
  )
