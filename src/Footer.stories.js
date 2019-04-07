import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from './Button'
import Container from './Container'
import Footer from './Footer'
import Heading from './Heading'
import Text from './Text'

storiesOf('Footer', module)
  .add(
    'default',
    () => (
      <>
        <Container>
          <Heading>Hi, I am a level 1 header</Heading>
          <Heading level="l2">Hi, I am a level 2 header</Heading>
          <Heading level="l3">Hi, I am a level 3 header</Heading>
        </Container>
        <Footer>
          <Text>Some text</Text>
          <div>
            <Button>Button text</Button>
          </div>
        </Footer>
      </>
    ),
    {
      info: {
        disable: true
      }
    }
  )
  .add(
    'w/ margin',
    () => (
      <>
        <Container>
          <Heading>Hi, I am a level 1 header</Heading>
          <Heading level="l2">Hi, I am a level 2 header</Heading>
          <Heading level="l3">Hi, I am a level 3 header</Heading>
        </Container>
        <Footer marginTopLevel="l5">
          <Text>Some text</Text>
          <div>
            <Button>Button text</Button>
          </div>
        </Footer>
      </>
    ),
    {
      info: {
        disable: true
      }
    }
  )
