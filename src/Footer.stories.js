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
          <Heading level="1">Hi, I am a level 1 header</Heading>
          <Heading level="2">Hi, I am a level 2 header</Heading>
          <Heading level="3">Hi, I am a level 3 header</Heading>
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
          <Heading level="1">Hi, I am a level 1 header</Heading>
          <Heading level="2">Hi, I am a level 2 header</Heading>
          <Heading level="3">Hi, I am a level 3 header</Heading>
        </Container>
        <Footer marginTopLevel="5">
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
