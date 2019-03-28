// Framework
import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
// Material-UI
import HomeIcon from '@material-ui/icons/Home'
// Components
import AppBar from './AppBar'
import Container from './Container'
import Heading from './Heading'
import Text from './Text'

storiesOf('AppBar', module)
  .add('with back button', () => (
    <AppBar leftButtonOnClick={action('go back')} />
  ))
  .add('with close button', () => (
    <AppBar leftButtonIcon="close" leftButtonOnClick={action('go back')} />
  ))
  .add('with menu', () => (
    <AppBar
      menuImage={<HomeIcon />}
      middleImage={<HomeIcon />}
      menuItems={[
        {
          text: 'Menu item 1',
          onClick: action('menu item 1 pressed')
        },
        {
          text: 'Menu item 2',
          onClick: action('menu item 2 pressed')
        }
      ]}
      bottomLeftItem={{
        text: 'Left',
        onClick: action('bottom left item')
      }}
      bottomRightItem={{
        text: 'Right',
        onClick: action('bottom right item')
      }}
    />
  ))
  .add('bottom', () => (
    <AppBar location="bottom">
      <Text>Hello!</Text>
    </AppBar>
  ))
  .add('top and bottom', () => (
    <div>
      <AppBar leftButtonOnClick={action('go back')} />
      <Container>
        <Heading>Hello!</Heading>
      </Container>
      <AppBar location="bottom">
        <Text>Hello!</Text>
      </AppBar>
    </div>
  ))
