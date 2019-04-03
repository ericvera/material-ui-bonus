// Framework
import React from 'react'
import PropTypes from 'prop-types'
import exact from 'prop-types-exact'
// Components
import BaseAppBar from './BaseAppBar'
import Button from '../Button'

const BottomAppBar = ({ content, buttonText, buttonVariant, onClick }) => {
  return (
    <BaseAppBar location="bottom" centered={true}>
      {content}
      <Button
        onClick={onClick}
        fullWidth={!content}
        centered={false}
        variant={buttonVariant}
      >
        {buttonText}
      </Button>
    </BaseAppBar>
  )
}

BottomAppBar.propTypes = exact({
  buttonText: PropTypes.string,
  buttonVariant: PropTypes.string,
  content: PropTypes.node,
  onClick: PropTypes.func
})

export default BottomAppBar
