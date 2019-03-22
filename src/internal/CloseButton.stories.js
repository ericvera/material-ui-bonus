import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import CloseButton from './CloseButton'

storiesOf('Internal/CloseButton', module).add('default', () => (
  <CloseButton onClick={action('close button clicked')} />
))
