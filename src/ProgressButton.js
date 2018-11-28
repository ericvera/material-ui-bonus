// Framework
import React from 'react'
// Material-UI
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import { withStyles } from '@material-ui/core/styles'

const styles = () => ({
  buttonProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12
  }
})

class ProgressButton extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      delayText: ''
    }

    this.resetDelay = this.resetDelay.bind(this)
    this.tickCountDown = this.tickCountDown.bind(this)
  }

  componentWillMount() {
    this.resetDelay()
  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }

  tickCountDown() {
    if (this.delay > 0) {
      this.setState({ delayText: ` (in ${this.delay--} seconds)` }, () => {
        this.timeout = setTimeout(this.tickCountDown, 1000)
      })
    } else {
      this.setState({ delayText: '' })
    }
  }

  resetDelay() {
    this.delay = this.props.delay
    this.timeout = null

    this.tickCountDown()
  }

  render() {
    const { disabled, children, classes, showProgress, ...others } = this.props
    const { delayText } = this.state

    return (
      <Button
        type="submit"
        disabled={showProgress || disabled || !!delayText}
        {...others}
      >
        {children}
        {delayText}
        {showProgress && (
          <CircularProgress size={24} className={classes.buttonProgress} />
        )}
      </Button>
    )
  }
}

export default withStyles(styles, { withTheme: true })(ProgressButton)
