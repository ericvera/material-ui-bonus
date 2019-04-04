import React from 'react'
import { storiesOf } from '@storybook/react'
import Heading from './Heading'
import Divider from './Divider'

storiesOf('Divider', module)
  .add(
    'centered with top margin',
    () => (
      <>
        <Heading level="1">Hi, I am a level 1 header</Heading>
        <Divider marginTopLevel="3" />
        <Heading level="2">Hi, I am a level 2 header</Heading>
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
        <Heading level="1">Hi, I am a level 1 header</Heading>
        <Divider centered={false} marginTopLevel="5" marginBottomLevel="3" />
        <Heading level="2">Hi, I am a level 2 header</Heading>
      </>
    ),
    {
      info: {
        disable: true
      }
    }
  )
