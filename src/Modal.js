import React from 'react'
import ReactDom from 'react-dom'

const MODAL_STYLES = {
  borderRadius: 5,
  padding: '2rem 3rem',
  margin: 10,
  color: '#333',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'rgb(238, 221, 221)',
  zIndex: 1000
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .1)',
  zIndex: 1000
}

const BUTTON_STYLES = {
  marginTop: '.7rem',
  padding: '.7rem 1.8rem',
  borderRadius: 5,
  fontSize: '.8rem',
  fontWeight: 'bold',
  outline: 0,
  margin: '0 auto',
  color: 'black',
  border: '1px solid black'
}

//React Accordion - https://youtu.be/jwp-cYZbgic?t=872 
export default function Modal({open, children, onClose}) {
  if (!open) return null

  return ReactDom.createPortal(
    <>
    <div style={OVERLAY_STYLES}/>
    <div style={MODAL_STYLES}>
      {children}
      <button style={BUTTON_STYLES} onClick={onClose}>Close Modal</button>
    </div>
    </>,
    document.getElementById('portal')
  )
}
