// Framework
import React from 'react'
import { storiesOf } from '@storybook/react'
// Components
import Text from './Text'

storiesOf('Text', module)
  .add('default', () => <Text>Some text</Text>)
  .add('sub-text', () => <Text variant="sub-text">Some sub-text</Text>)
  .add('error', () => <Text variant="error">Some error text</Text>)
