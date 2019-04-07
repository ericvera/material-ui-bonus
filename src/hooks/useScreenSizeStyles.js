import { ScreenSize } from '../helpers/constants'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  [ScreenSize.all]: {
    display: 'flex'
  },
  [ScreenSize.small]: {
    display: 'flex',

    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  [ScreenSize.notSmall]: {
    display: 'none',

    [theme.breakpoints.up('sm')]: {
      display: 'flex'
    }
  }
}))

export default () => {
  const classes = useStyles()

  return classes
}
