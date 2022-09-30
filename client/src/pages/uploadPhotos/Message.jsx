import React from 'react'
import PropTypes from 'prop-types'

const Message = ({msg}) => {
  return (
    <div className="ui success message">
    <p>{msg}</p>
  </div>
  )
}

Message.propTypes = {
msg:PropTypes.string.isRequired
}

export default Message