import React from 'react'

const Modal = ({
  title,
  message,
  closeHandler
}) => {
  let header = ''
  let content = ''
  if (title) {
      header = (
        <div className="modal-header">{title}</div>
      )
  }
  const hideModal = () => {
    if (closeHandler && typeof closeHandler === 'function') {
      closeHandler()
    }
  }
  if (message) {
    content = (
      <>
        <span className="close-modal" onClick={hideModal}>X</span>
        {header}
        <div className="modal-content">{message}</div>
      </>
    )
  }
  return (
    <>
      <div id="overlay" className="overlay black hide"></div>
      <div id="alert-box" className="alert-box hide">
        {content}
      </div>
    </>
  )
}

export default Modal