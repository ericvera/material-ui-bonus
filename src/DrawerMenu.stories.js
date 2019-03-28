// Framework
import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
// Material-UI
import HomeIcon from '@material-ui/icons/Home'
// Components
import Container from './Container'
import DrawerMenu from './DrawerMenu'

const DrawerMenuSample1 = () => {
  return (
    <DrawerMenu
      menuLogo={<HomeIcon />}
      appBarImage={<HomeIcon />}
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
  )
}

storiesOf('DrawerMenu', module).add('default', () => <DrawerMenuSample1 />)
