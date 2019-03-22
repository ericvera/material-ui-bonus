import React from 'react'

import { storiesOf } from '@storybook/react'

import BackAppBar from './BackAppBar'
import Container from './Container'
import Heading from './Heading'

storiesOf('Container', module)
  .add('first, centered, guttered, flex (default)', () => (
    <>
      <BackAppBar />
      <Container>
        <Heading>Heading</Heading>
      </Container>
    </>
  ))
  .add('first, centered, guttered, no flex', () => (
    <>
      <BackAppBar />
      <Container isFlex={false}>
        <Heading>Heading</Heading>
      </Container>
    </>
  ))
  .add('first, centered, not guttered, flex', () => (
    <>
      <BackAppBar />
      <Container disableGutters={true}>
        <Heading>Heading</Heading>
      </Container>
    </>
  ))
  .add('first, centered, not guttered, no flex', () => (
    <Container disableGutters={true} isFlex={false}>
      <BackAppBar />
      <Heading>Heading</Heading>
    </Container>
  ))
  .add('first, not centered, guttered, flex ', () => (
    <Container isCentered={false}>
      <BackAppBar />
      <Heading>Heading</Heading>
    </Container>
  ))
  .add('first, not centered, guttered, no flex', () => (
    <Container isCentered={false} isFlex={false}>
      <BackAppBar />
      <Heading>Heading</Heading>
    </Container>
  ))
  .add('first, not centered, not guttered, flex', () => (
    <Container isCentered={false} disableGutters={true}>
      <BackAppBar />
      <Heading>Heading</Heading>
    </Container>
  ))
  .add('first, not centered, not guttered, no flex', () => (
    <Container isCentered={false} disableGutters={true} isFlex={false}>
      <BackAppBar />
      <Heading>Heading</Heading>
    </Container>
  ))

  // Not first

  .add('not first, centered, guttered, flex', () => (
    <Container isFirst={false}>
      <BackAppBar />
      <Heading>Heading</Heading>
    </Container>
  ))
  .add('not first, centered, guttered, no flex', () => (
    <Container isFirst={false} isFlex={false}>
      <BackAppBar />
      <Heading>Heading</Heading>
    </Container>
  ))
  .add('not first, centered, not guttered, flex', () => (
    <Container isFirst={false} disableGutters={true}>
      <BackAppBar />
      <Heading>Heading</Heading>
    </Container>
  ))
  .add('not first, centered, not guttered, no flex', () => (
    <Container isFirst={false} disableGutters={true} isFlex={false}>
      <BackAppBar />
      <Heading>Heading</Heading>
    </Container>
  ))
  .add('not first, not centered, guttered, flex ', () => (
    <Container isFirst={false} isCentered={false}>
      <BackAppBar />
      <Heading>Heading</Heading>
    </Container>
  ))
  .add('not first, not centered, guttered, no flex', () => (
    <Container isFirst={false} isCentered={false} isFlex={false}>
      <BackAppBar />
      <Heading>Heading</Heading>
    </Container>
  ))
  .add('not first, not centered, not guttered, flex', () => (
    <Container isFirst={false} isCentered={false} disableGutters={true}>
      <BackAppBar />
      <Heading>Heading</Heading>
    </Container>
  ))
  .add('not first, not centered, not guttered, no flex', () => (
    <Container
      isFirst={false}
      isCentered={false}
      disableGutters={true}
      isFlex={false}
    >
      <BackAppBar />
      <Heading>Heading</Heading>
    </Container>
  ))

/*storiesOf('Button', module).add('default', () => (
  <Button onClick={action('clicked')}>Hello Button</Button>
))
/*  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ))*/
