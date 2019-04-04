// Framework
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useReducer
} from 'react'
//import PropTypes from 'prop-types'
//import exact from 'prop-types-exact'
// Material-UI
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  buttonProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    // TODO: Figure out these margins
    marginTop: -12,
    marginLeft: -12
  }
})

function init(initialDelay) {
  return { delay: initialDelay }
}

function reducer(state, action) {
  switch (action.type) {
    case 'tick':
      if (state.delay == 0) {
        return state
      }
      return { delay: state.delay - 1 }
    case 'reset':
      return init(action.payload)
    default:
      throw new Error()
  }
}

const ProgressButton = (
  { children, className, delay, disabled, fullWidth, onClick },
  ref
) => {
  const [state, dispatch] = useReducer(reducer, delay, init)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch({ type: 'tick' })
    }, 1000)
    return () => clearTimeout(timeoutId)
  }, [state.delay])

  useImperativeHandle(ref, () => ({
    resetDelay: () => dispatch({ type: 'reset', payload: delay })
  }))

  const classes = useStyles()

  return (
    <Button
      type="submit"
      disabled={disabled || !!state.delay}
      onClick={onClick}
      className={className}
      fullWidth={fullWidth}
    >
      {children}
      {state.delay ? ` (in ${state.delay} seconds)` : ''}
      {Boolean(state.delay) && (
        <CircularProgress size={24} className={classes.buttonProgress} />
      )}
    </Button>
  )
}

// ProgressButton.propTypes = exact({
//   children: PropTypes.node,
//   className: PropTypes.string,
//   delay: PropTypes.number,
//   disabled: PropTypes.bool,
//   fullWidth: PropTypes.bool,
//   onClick: PropTypes.func
// })

export default forwardRef(ProgressButton)

// NOTE: the line above does not support propTypes. The line below throws a different error.
//  Spent a few hours trying to figure out how to get the propTypes to work, but it didn't
//  work out. Postponing for later.

// export default forwardRef((props, ref) => (
//   <ProgressButton {...props} ref={ref} />
// ))
