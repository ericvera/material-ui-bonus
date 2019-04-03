import PropTypes from 'prop-types'
import getSpacing from './getSpacing'
import { makeStyles } from '@material-ui/styles'

export default (marginTopLevel = 0, marginBottomLevel = 0) => {
  const classes = makeStyles({
    margins: {
      marginTop: getSpacing(marginTopLevel),
      marginBottom: getSpacing(marginBottomLevel)
    }
  })()

  return classes.margins
}

export const MarginPropTypes = PropTypes.oneOf([
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
