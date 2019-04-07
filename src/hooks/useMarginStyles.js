import getSpacing from '../helpers/getSpacing'
import { makeStyles } from '@material-ui/styles'
import { SpacingLevel } from '../helpers/constants'

export default (
  marginTopLevel = SpacingLevel.l0,
  marginBottomLevel = SpacingLevel.l0
) => {
  const classes = makeStyles({
    margins: {
      marginTop: getSpacing(marginTopLevel),
      marginBottom: getSpacing(marginBottomLevel)
    }
  })()

  return classes.margins
}
