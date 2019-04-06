import PropTypes from 'prop-types'
import getSpacing from './getSpacing'
import { makeStyles } from '@material-ui/styles'

export default (paddingTopLevel = 0, paddingBottomLevel = 0) => {
  const classes = makeStyles({
    padding: {
      paddingTop: getSpacing(paddingTopLevel),
      paddingBottom: getSpacing(paddingBottomLevel)
    }
  })()

  return classes.padding
}

export const PaddingPropTypes = PropTypes.oneOf([
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9'
])
