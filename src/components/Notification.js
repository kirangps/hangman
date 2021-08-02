import React from 'react'

const Notification=({showNotification})=> {
  return (
    <div className={`notification-container ${showNotification?'show':''}`}>
      <p>How many times will you enter the same letter subba rao? </p>
    </div>
  )
}

export default Notification
