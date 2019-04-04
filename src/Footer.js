// Platform
import React from 'react'
import PropTypes from 'prop-types'
import exact from 'prop-types-exact'
// Material-UI
import { makeStyles } from '@material-ui/styles'
import InnerContainer from './internal/InnerContainer'

const useStyles = makeStyles({
  footer: {
    flexShrink: 0
  }
})

const Footer = ({ children }) => {
  const classes = useStyles()

  return (
    <div className={classes.footer}>
      <InnerContainer flex={true}>{children}</InnerContainer>
    </div>
  )
}

Footer.propTypes = exact({
  children: PropTypes.node
})

export default Footer
