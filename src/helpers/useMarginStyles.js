import getSpacing from './getSpacing'
import { makeStyles } from '@material-ui/styles'

export default (topLevel = 0, bottomLevel = 0) => {
  const classes = makeStyles({
    margins: {
      marginTop: getSpacing(topLevel),
      marginBottom: getSpacing(bottomLevel)
    }
  })()

  return classes.margins
}
