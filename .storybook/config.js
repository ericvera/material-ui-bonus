import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { install } from '@material-ui/styles'
import ThemeProvider from '../src/ThemeProvider'

install()

console.log('material-ui installed!')

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.stories.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)

const ThemeDecorator = storyFn => <ThemeProvider>{storyFn()}</ThemeProvider>
addDecorator(ThemeDecorator)
