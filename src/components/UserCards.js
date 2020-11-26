import './components.css';

import { useState } from 'react';
import UserInfo from './UserInfo';
import Modal from './Modal';

const UserCards = ({ users, setUsers, filteredUsers, updateUsers }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState('');
  const [currentId, setCurrentID] = useState('');

  const handleClick = (id) => {
    setCurrentID(id);
    filteredUsers.forEach((user) => {
      if (user.login.uuid === id) {
        setSelectedUser(user);
      }
    });
  };

  return (
    <div className='users'>
      {filteredUsers.map((user, index) => {
        return (
          <UserInfo
            user={user}
            index={index}
            handleClick={handleClick}
            setIsOpen={setIsOpen}
          />
        );
      })}
      {selectedUser && (
        <Modal
          updateUsers={updateUsers}
          users={users}
          id={currentId}
          selectedUser={selectedUser}
          open={isOpen}
          onClose={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default UserCards;
