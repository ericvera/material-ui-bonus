import React from 'react'

import { storiesOf } from '@storybook/react'

import BackAppBar from './BackAppBar'
import Button from './Button'
//import CloseButton from './internal/CloseButton'
import Container from './Container'
import Heading from './Heading'
import Text from './Text'
import List from './List'
import ListItem from './ListItem'

storiesOf('Sample Layouts', module)
  .add('H1 + Text + Button', () => (
    <>
      <BackAppBar />
      <Container>
        <Heading>Heading</Heading>
        <Text>
          <p>This is a paragraph</p>
          <p>
            It comes followed by a second paragraph for illustration purpose.
          </p>
        </Text>
        <Button>Go somewhere</Button>
      </Container>
    </>
  ))
  .add('H2 + SubText + List', () => (
    <>
      <BackAppBar />
      <Container>
        <Heading level="2">Heading</Heading>
        <Text isSubText={true}>This is a subtext paragraph group.</Text>
        <List>
          <ListItem
            primary="This is a heading for a list item"
            secondary="This is some text for a list item."
          />
          <ListItem primary="This is a list item that only contains primary text. It may be a bit longer." />
        </List>
      </Container>
    </>
  ))
