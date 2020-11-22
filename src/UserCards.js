import './UserCards.css';
import { useState } from 'react';
import Modal from './Modal.js';

const BUTTON_WRAPPER_STYLES = {
  position: 'relative',
  zIndex: 1,
};

const UserCards = ({ users }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState('');

  const handleClick = (id) => {
    console.log(id);
    users.forEach((user) => {
      if (user.login.uuid === id) {
        setSelectedUser(user);
      }
    });
    console.log(selectedUser);
  };

  return users.map((user, index) => {
    return (
      <>
        <div className='user' key={index} id={user.login.uuid}>
          {/* <CardInfo user={user}/> */}
          <img className='profile-img' src={user.picture.medium} alt='user' />
          <h2 className='name'>{user.name.first + ' ' + user.name.last}</h2>
          <div className='details'>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Phone:</strong> {user.phone}
            </p>
            <p>
              <strong>Birth Year:</strong>{' '}
              {'' + new Date(user.dob.date).getFullYear()}
            </p>
            <p>
              <strong>Location: </strong>
              {` ${user.location.city}, ${user.location.state}`}{' '}
            </p>
          </div>

          {/* https://upmostly.com/tutorials/react-onclick-event-handling-with-examples */}

          <div
            style={BUTTON_WRAPPER_STYLES}
            onClick={(e) =>
              handleClick(
                e.target.parentElement.parentElement.getAttribute('id')
              )
            }
          >
            <button
              className='btn-card'
              onClick={(e) => {
                setIsOpen(true);
              }}
            >
              See More
            </button>
          </div>
        </div>

        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          {selectedUser && (
            <>
              <img
                className='profile-img'
                src={selectedUser.picture.medium}
                alt='user'
              />

              <h2 className='name'>
                {selectedUser.name.first + ' ' + selectedUser.name.last}
              </h2>

              <div className='details'>
                <h3>Contact</h3>
                <p>Email: {selectedUser.email}</p>
                <p>Phone: {selectedUser.phone}</p>
                <h3>Time</h3>
                <p>
                  Birth Year:{' '}
                  {'' + new Date(selectedUser.dob.date).getFullYear()}
                </p>
                <p>Age: {selectedUser.dob.age}</p>
                <h3>Location</h3>
                <p>City: {selectedUser.location.city}</p>
                <p>State: {selectedUser.location.state}</p>
                <p>Country: {selectedUser.location.country}</p>
                <h3>Login</h3>
                <p>Username: {selectedUser.login.username}</p>
                <p>Password: {selectedUser.login.password}</p>
              </div>
            </>
          )}
        </Modal>
      </>
    );
  });
};

export default UserCards;
