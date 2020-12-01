import './Modal.css';

import { useState, useRef } from 'react';
import ReactDom from 'react-dom';
import ModalInfo from './ModalInfo';

const Modal = ({ open, onClose, users, id, selectedUser, updateUsers }) => {
  const [openNotePad, setOpenNotePad] = useState(false);
  const [note, setNote] = useState(selectedUser.note);
  const alertRef = useRef();

  const handleNoteSave = () => {
    setOpenNotePad(false);
    if (note !== selectedUser.note) {
      updateUsers(note, id);
      showAlert();
    }
    setNote('');
  };

  const handleAddOrEditNote = () => {
    setOpenNotePad(true);
    setNote(selectedUser.note);
  };

  const showAlert = () => {
    alertRef.current.textContent = 'Your changes have been saved!';
    setTimeout(() => {
      alertRef.current.textContent = '';
      onClose();
    }, 1000);
  };

  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div className='overlay-styles' />
      <div className='modal-styles'>

        {/* CURRENTLY WORKING ON */}
        
        <ModalInfo selectedUser={selectedUser} />
        <h3>Notes:</h3>
        <p>{selectedUser.note ? selectedUser.note : ''}</p>
        {/* ALERT */}
        <p className='alert' ref={alertRef} />

        {openNotePad && (
          <textarea
            value={note}
            onChange={(e) => {
              setNote(e.target.value);
            }}
            placeholder='Enter your notes here...'
          />
        )}

        <div>
          <button
            className='close-btn-styles'
            onClick={() => {
              onClose();
              setOpenNotePad(false);
            }}
          >
            Close
          </button>
          {openNotePad ? (
            <button className="notes-btn-styles" onClick={handleNoteSave}>
              SAVE
            </button>
          ) : (
            <button className="notes-btn-styles" onClick={handleAddOrEditNote}>
              {selectedUser.note ? 'EDIT' : 'Add Note'}
            </button>
          )}
        </div>
      </div>
    </>,
    document.getElementById('portal')
  );
};

export default Modal;