// Framework
import React from 'react'
import { storiesOf } from '@storybook/react'
// Components
import Text from './Text'

storiesOf('Text', module)
  .add('default', () => <Text>Some text</Text>)
  .add('sub-text', () => <Text variant="sub-text">Some sub-text</Text>)
  .add('error', () => <Text variant="error">Some error text</Text>)
  .add('multiple', () => (
    <div>
      <Text variant="error">Some error text</Text>
      <Text variant="error">Some error text</Text>
      <Text variant="error">Some error text</Text>
    </div>
  ))
  .add('multiple / inline', () => (
    <div>
      <Text inline={true}>Some text</Text>
      <Text variant="sub-text" inline={true}>
        Some text
      </Text>
      <Text variant="error" inline={true}>
        Some text
      </Text>
    </div>
  ))
