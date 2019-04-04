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
// Image
import backgroundImage from '../.storybook/test-image.jpg'

storiesOf('AppBar', module)
  .add('back', () => <AppBar variant="back" onClick={action('go back')} />)
  .add('close', () => <AppBar variant="close" onClick={action('close')} />)
  .add('drawer-menu', () => (
    <AppBar
      variant="drawer-menu"
      middleImage={<HomeIcon />}
      menuImage={<HomeIcon />}
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
      bottomLeftMenuItem={{
        text: 'Left',
        onClick: action('bottom left item')
      }}
      bottomRightMenuItem={{
        text: 'Right',
        onClick: action('bottom right item')
      }}
    />
  ))
  .add('dialog-menu', () => (
    <div>
      <AppBar
        variant="dialog-menu"
        openMenuLogo={<HomeIcon />}
        closeMenuLogo={<HomeIcon />}
        logo={<HomeIcon />}
        color="transparent"
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
      />
      <Container backgroundImage={backgroundImage}>
        <Text marginTopLevel="9">Content here</Text>
        <Text marginTopLevel="9">Content here</Text>
        <Text marginTopLevel="9">Content here</Text>
      </Container>
      <Container fullPage={false}>Content 2</Container>
    </div>
  ))
  .add('bottom-full-button', () => (
    <AppBar
      variant="bottom-full-button"
      buttonText="Click the button"
      onClick={action('full-button pressed')}
    />
  ))
  .add('bottom-text-button', () => (
    <AppBar
      variant="bottom-full-button"
      content={
        <div>
          <Heading level="3">Some heading</Heading>
          <Text>Some text</Text>
        </div>
      }
      buttonText="Click the button"
      onClick={action('text pressed')}
    />
  ))
  .add('top (close) and bottom (bottom-text-bottom)', () => (
    <div>
      <AppBar variant="close" onClick={action('close')} />
      <Container>
        <Heading level="1">Hello!</Heading>
      </Container>
      <AppBar
        variant="bottom-full-button"
        content={
          <div>
            <Heading level="3">Some heading</Heading>
            <Text>Some text</Text>
          </div>
        }
        buttonText="Click the button"
        onClick={action('text pressed')}
      />
    </div>
  ))
