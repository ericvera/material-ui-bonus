// Framework
import React from 'react'
// Components
import GutteredContainer from './GutteredContainer'
// Material-UI
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing.unit * 4
  },
  // This needs to exist empty so that it can be overwritten
  // by consumers of this component
  typography: {}
}))

const Heading = ({ children, ...others }) => {
  const classes = useStyles()
  return (
    <GutteredContainer className={classes.root} {...others}>
      <Typography variant="h3" className={classes.typography}>
        {children}
      </Typography>
    </GutteredContainer>
  )
}

export default Heading
