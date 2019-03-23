import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import BackAppBar from './BackAppBar'
import Button from './Button'
import Container from './Container'
import Heading from './Heading'
import Text from './Text'
import List from './List'
import ListItem from './ListItem'
import BottomAppBar from './BottomAppBar'
import { TextField } from '@material-ui/core'

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
      <Container fullPage={true} marginTopLevel="4" marginBottomLevel="6">
        <Heading level="2">Heading</Heading>
        <Heading level="3">Sub heading</Heading>
        <List>
          <ListItem secondary="This is an item with only secondary text." />
          <ListItem
            secondary={
              <>
                First line.
                <br />
                Second line.
                <br />
                Third line.
              </>
            }
          />
          <ListItem
            secondary="This is an item with secondary text and a button."
            onClick={action('list item pressed')}
          />
          <ListItem
            divider={false}
            primary="This is a list item that only contains primary text. It may be a bit longer."
          />
        </List>
      </Container>
      <BottomAppBar>
        <Button fullWidth={true} type="confirmation">
          Next
        </Button>
      </BottomAppBar>
    </>
  ))
  .add('H2 + Input + Button', () => (
    <>
      <BackAppBar />
      <Container>
        <Heading level="2">Heading</Heading>
        <form>
          <TextField label="Some label" placeholder="Sample text" />
        </form>
        <Button type="primary" onClick={action('button pressed')}>
          Press me
        </Button>
      </Container>
    </>
  ))
