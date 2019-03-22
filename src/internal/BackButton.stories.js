import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import BackButton from './BackButton'

storiesOf('Internal/BackButton', module).add('default', () => (
  <BackButton onClick={action('back button clicked')} />
))
