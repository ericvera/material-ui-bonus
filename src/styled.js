// Framework
import React from 'react'
import classNames from 'classnames'
// Material-UI
import { withStyles } from '@material-ui/core/styles'

export default Component => {
  return (style, options) => {
    function StyledComponent(props) {
      const { classes, className, ...other } = props
      return (
        <Component className={classNames(classes.root, className)} {...other} />
      )
    }

    const styles =
      typeof style === 'function'
        ? theme => ({ root: style(theme) })
        : { root: style }
    return withStyles(styles, options)(StyledComponent)
  }
}
