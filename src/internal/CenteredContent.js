// Framework
import React from 'react'
import PropTypes from 'prop-types'
import exact from 'prop-types-exact'
// Material-UI
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  centeredContent: {
    textAlign: 'center'
  }
})

const CenteredContent = ({ children }) => {
  const classes = useStyles()

  return <div className={classes.centeredContent}>{children}</div>
}

CenteredContent.propTypes = exact({
  children: PropTypes.node
})

export default CenteredContent
