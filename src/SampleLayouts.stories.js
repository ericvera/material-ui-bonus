import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import AppBar from './AppBar'
import Button from './Button'
import Container from './Container'
import Heading from './Heading'
import List from './List'
import ListItem from './ListItem'
import Text from './Text'
import TextField from './TextField'

storiesOf('Sample Layouts', module)
  .addParameters({
    info: {
      disable: true
    }
  })
  .add('H1 + Text + Button', () => (
    <>
      <AppBar
        leftButtonIcon="close"
        leftButtonOnClick={action('close screen')}
      />
      <Container>
        <Heading marginTopLevel="6">Heading</Heading>
        <Text marginTopLevel="4">
          <p>This is a paragraph</p>
          <p>
            It comes followed by a second paragraph for illustration purpose.
          </p>
        </Text>
        <Button marginTopLevel="4">Go somewhere</Button>
      </Container>
    </>
  ))
  .add('H2 + SubText + List', () => (
    <>
      <AppBar leftButtonOnClick={action('go back')} />
      <Container fullPage={true} hasBottomBar={true}>
        <Heading level="2" marginTopLevel="4">
          Heading
        </Heading>
        <List>
          <ListItem primary="by Some Co" />
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
      <AppBar location="bottom">
        <Button fullWidth={true} type="confirmation">
          Next
        </Button>
      </AppBar>
    </>
  ))
  .add('H2 + Input + Button', () => (
    <>
      <AppBar leftButtonOnClick={action('go back')} />
      <Container>
        <Heading level="2" marginTopLevel="4">
          Heading
        </Heading>
        <form>
          <TextField
            label="Some label"
            placeholder="Sample text"
            marginTopLevel="5"
          />
        </form>
        <Button
          type="primary"
          marginTopLevel="4"
          onClick={action('button pressed')}
        >
          Press me
        </Button>
      </Container>
    </>
  ))
