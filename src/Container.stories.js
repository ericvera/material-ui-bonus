import React from 'react'
import { storiesOf } from '@storybook/react'
import Heading from './Heading'
import Container from './Container'

storiesOf('Container', module)
  .add('default', () => (
    <Container>
      <Heading>Hi, I am a level 1 header</Heading>
    </Container>
  ))
  .add('small only', () => (
    <Container screenSize="small">
      <Heading>Hi, I should only be visible in a small screen size</Heading>
    </Container>
  ))
  .add('not-small only', () => (
    <Container screenSize="not-small">
      <Heading>Hi, I should only be visible in a not-small screen size</Heading>
    </Container>
  ))
  .add('small and not-small', () => (
    <div>
      <Container screenSize="small">
        <Heading>Hi, I should only be visible in a small screen size</Heading>
      </Container>
      <Container screenSize="not-small">
        <Heading>
          Hi, I should only be visible in a not-small screen size
        </Heading>
      </Container>
    </div>
  ))
  .add('custom background color (brand)', () => (
    <Container backgroundColor="brand">
      <Heading>Hi, My background should have the brand color</Heading>
    </Container>
  ))
