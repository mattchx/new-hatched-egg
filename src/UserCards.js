import React from 'react';
import './App.css';

const UserCards = (props) => {
  return props.users.map((user, index) => {
    return (
      <div className='user' key={index}>
        <img className='profile-img' src={user.picture.medium} alt='user' />
        <h2>{user.name.first + ' ' + user.name.last}</h2>
        <div className='details'>
          <p>
            <strong>Email: </strong> {user.email}
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
      </div>
    );
  });
};

export default UserCards;
