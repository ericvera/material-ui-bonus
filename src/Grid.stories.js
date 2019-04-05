import React from 'react'
import { storiesOf } from '@storybook/react'
import Grid from './Grid'
import Heading from './Heading'
import Text from './Text'

storiesOf('Grid', module)
  .add('default', () => (
    <Grid>
      <Heading level="1">Hi, I am a level 1 header</Heading>
      <Heading level="1">Hi, I am a level 2 header</Heading>
      <Heading level="1">Hi, I am a level 3 header</Heading>
    </Grid>
  ))
  .add('not centered', () => (
    <Grid>
      <div>
        <Heading level="3">Hi, I am a level 1 header</Heading>
        <Text>
          Some text here. Make it a longer text here so that it takes more
          space.
        </Text>
      </div>
      <div>
        <Heading level="3">Hi, I am a level 1 header</Heading>
        <Text>Some text here.</Text>
      </div>
      <div>
        <Heading level="3">Hi, I am a level 1 header</Heading>
        <Text>
          Some text here. Make it a longer text here so that it takes more
          space.
        </Text>
      </div>
    </Grid>
  ))
