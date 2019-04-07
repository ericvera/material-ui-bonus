import getSpacing from '../helpers/getSpacing'
import { makeStyles } from '@material-ui/styles'
import { SpacingLevel } from '../helpers/constants'

export default (
  paddingTopLevel = SpacingLevel.l0,
  paddingBottomLevel = SpacingLevel.l0
) => {
  const classes = makeStyles({
    padding: {
      paddingTop: getSpacing(paddingTopLevel),
      paddingBottom: getSpacing(paddingBottomLevel)
    }
  })()

  return classes.padding
}
