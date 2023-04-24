import React from 'react'

const FlashMessage = ({ color, message }) => {
  return (
    <div className="flash-message" style={{ background: color }}>
      <h3>{`${message}`}</h3>
    </div>
  )
}

FlashMessage.defaultProps = {
  color: 'red',
}

export default FlashMessage
