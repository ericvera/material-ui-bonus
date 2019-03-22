// Framework
import React from 'react'
// Material-UI
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/styles'
// Helpers
import getSpacing from './helpers/getSpacing'

const useStyles = makeStyles({
  text: {
    marginTop: getSpacing(5)
  },
  subText: {
    marginTop: getSpacing(4)
  }
})

const Text = ({ isSubText = false, children, ...others }) => {
  const classes = useStyles()

  return (
    <Typography
      component={React.Children.count(children) > 1 ? 'div' : 'p'}
      variant={isSubText ? 'body2' : 'body1'}
      className={classes[isSubText ? 'subText' : 'text']}
      {...others}
    >
      {children}
    </Typography>
  )
}

export default Text
