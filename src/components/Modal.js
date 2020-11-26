import './components.css';

import { useState, useRef } from 'react';
import ReactDom from 'react-dom';
import ModalInfo from './ModalInfo';

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
  zIndex: 1000,
};

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .1)',
  zIndex: 1000,
};

const CLOSE_BUTTON_STYLES = {
  padding: '.7rem 1.0rem',
  borderRadius: 5,
  fontSize: '.8rem',
  fontWeight: 'bold',
  outline: 0,
  margin: '.5rem',
  color: 'black',
  border: '1px solid black',
};

const NOTES_BUTTON_STYLES = {
  padding: '.7rem 1.0rem',
  borderRadius: 5,
  fontSize: '.8rem',
  fontWeight: 'bold',
  outline: 0,
  margin: '.5rem',
  color: 'brown',
  border: '2px solid brown',
};

//React Accordion - https://youtu.be/jwp-cYZbgic?t=872
const Modal = ({ open, onClose, users, id, selectedUser, updateUsers }) => {
  const [openNotePad, setOpenNotePad] = useState(false);
  const [note, setNote] = useState('');
  const alertRef = useRef();

  const handleNoteSave = () => {
    setOpenNotePad(false);
    updateUsers(note, id);
    setNote('');
    showAlert();
  };

  const showAlert = () => {
    alertRef.current.textContent = 'Your changes have been saved!';
    setTimeout(() => {
      alertRef.current.textContent = '';
      onClose();
    }, 2000);
  };

  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <ModalInfo selectedUser={selectedUser} />
        <h3>Notes:</h3>
        <p>{selectedUser.note ? selectedUser.note : ''}</p>
        {/* ALERT */}
        <p className='alert' ref={alertRef}></p>
        {openNotePad && selectedUser.note ? (
          <textarea
            value={note}
            onChange={(e) => {
              setNote(e.target.value);
            }}
            placeholder='Enter your notes here...'
          />
        ) : openNotePad ? (
          <textarea
            value={note}
            onChange={(e) => {
              setNote(e.target.value);
            }}
            placeholder='Enter your notes here...'
          />
        ) : null}
        <div>
          <button style={CLOSE_BUTTON_STYLES} onClick={onClose}>
            Close
          </button>
          {openNotePad ? (
            <button style={NOTES_BUTTON_STYLES} onClick={handleNoteSave}>
              SAVE
            </button>
          ) : (
            <button
              style={NOTES_BUTTON_STYLES}
              onClick={() => setOpenNotePad(true)}
            >
              EDIT
            </button>
          )}
        </div>
      </div>
    </>,
    document.getElementById('portal')
  );
};

export default Modal;
