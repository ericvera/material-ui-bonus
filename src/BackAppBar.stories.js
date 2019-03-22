import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import BackAppBar from './BackAppBar'

storiesOf('AppBars/BackAppBar', module).add('default', () => (
  <BackAppBar onClick={action('back button clicked')} />
))
