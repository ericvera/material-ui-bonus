import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { install } from '@material-ui/styles'
import ThemeProvider from '../src/ThemeProvider'

import '@storybook/addon-console'

install()

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.stories.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

addDecorator(withInfo)

configure(loadStories, module)

const ThemeDecorator = storyFn => <ThemeProvider>{storyFn()}</ThemeProvider>
addDecorator(ThemeDecorator)
