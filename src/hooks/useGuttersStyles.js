import { makeStyles } from '@material-ui/styles'

export default (disableGutters = false) => {
  if (disableGutters) {
    return ''
  }

  const classes = makeStyles(theme => ({
    gutters: theme.mixins.gutters()
  }))()

  return classes.gutters
}
