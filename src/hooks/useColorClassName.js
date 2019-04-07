import { makeStyles } from '@material-ui/styles'
import getColor from '../helpers/getColor'

const useStyles = (color, backgroundColor) => {
  const colorStyles = {}

  if (color) {
    colorStyles.color = getColor(color)
  }

  if (backgroundColor) {
    colorStyles.backgroundColor = getColor(backgroundColor)
  }

  console.log(`colorStyles ${colorStyles}`)

  return makeStyles({
    colorStyles
  })()
}

export default (color, backgroundColor) => {
  const classes = useStyles(color, backgroundColor)

  return classes.colorStyles
}
