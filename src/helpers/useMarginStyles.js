import getSpacing from './getSpacing'
import { makeStyles } from '@material-ui/styles'

export default (marginTopLevel = 0, marginBottomLevel = 0) => {
  const classes = makeStyles({
    margins: {
      marginTop: getSpacing(marginTopLevel),
      marginBottom: getSpacing(marginBottomLevel)
    }
  })()

  return classes.margins
}
