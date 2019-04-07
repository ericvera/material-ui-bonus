import initStoryshots from '@storybook/addon-storyshots'

initStoryshots({
  // NOTE: This makes it so that any Story with '[NoStoryshot]' in the name is not tested
  //  with Storyshot. For example Snackbars cannot be rendered to test.
  storyKindRegex: /^((?!.*?\[NoStoryshot\]).)*$/
})
