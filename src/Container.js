// Framework
import React from 'react'
// Material-UI
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/styles'

const useMainContainerStyles = makeStyles(theme => ({
  flex: {
    flexGrow: 1
  },
  firstContainer: {
    marginTop: theme.spacing.unit * 8
  }
}))

const useGutteredStyles = makeStyles(theme => ({
  gutters: theme.mixins.gutters()
}))

const GutteredContainer = ({ disableGutters = false, children, ...others }) => {
  if (disableGutters) {
    return children
  }

  const classes = useGutteredStyles()

  return (
    <div className={classes.gutters} {...others}>
      {children}
    </div>
  )
}

const CenteredContainer = ({
  isFlex = true,
  isFirst = true,
  disableGutters,
  children,
  ...others
}) => {
  const classes = useMainContainerStyles()

  const classList = []
  if (isFlex) {
    classList.push(classes.flex)
  }

  if (isFirst) {
    //classList.push(classes.firstContainer)
  }

  const outerContainerClasses = classList.join(' ')

  return (
    <Grid
      container
      justify="center"
      alignContent="center"
      className=""
      {...others}
    >
      <Grid item xs={12} sm={9} md={6} lg={3} className={outerContainerClasses}>
        <GutteredContainer disableGutters={disableGutters}>
          {children}
        </GutteredContainer>
      </Grid>
    </Grid>
  )
}

const NonCenteredContainer = ({
  isFlex = true,
  isFirst = true,
  children,
  ...others
}) => {
  const classes = useMainContainerStyles()

  const classList = []
  if (isFlex) {
    classList.push(classes.flex)
  }

  if (isFirst) {
    //classList.push(classes.firstContainer)
  }

  const outerContainerClasses = classList.join(' ')

  return <div className={outerContainerClasses}>{children}</div>
}

const OuterContainer = ({ isCentered = true, ...others }) => {
  if (isCentered) {
    return <CenteredContainer {...others} />
  }

  return <NonCenteredContainer {...others} />
}

const Container = ({ ...others }) => {
  return <OuterContainer {...others} />
}

export default Container
