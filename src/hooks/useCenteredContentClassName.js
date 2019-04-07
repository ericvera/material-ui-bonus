import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  centeredContent: {
    textAlign: 'center',
    width: '100%'
  }
})

export default (color, backgroundColor) => {
  const classes = useStyles()

  return classes.centeredContent
}
