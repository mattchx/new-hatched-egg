import './components.css';

import Accordian from './Accordian';
const ModalInfo = ({ selectedUser }) => {
  return (
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
        <Accordian
          title='Contact'
          content={`
            <p class='data'><strong>Email:</strong> ${selectedUser.email}</p>
            <p class='data'><strong>Phone:</strong> ${selectedUser.phone}</p>`}
        />
        <Accordian
          title='Time'
          content={`
          <p class='data'><strong>Birth Year:</strong> ${'' + new Date(selectedUser.dob.date).getFullYear()}</p>
          <p class='data'><strong>Age:</strong> ${selectedUser.dob.age}</p>
            `}
        />
        <Accordian
          title='Location'
          content={`
          <p class='data'><strong>City:</strong>  ${selectedUser.location.city}</p>
          <p class='data'><strong>State:</strong> ${selectedUser.location.state}</p>
          <p class='data'><strong>Country:</strong> ${selectedUser.location.country}</p>
            `}
        />
        <Accordian
          title='Login'
          content={`
          <p class='data'><strong>Username:</strong> ${selectedUser.login.username}</p>
          <p class='data'><strong>Password:</strong> ${selectedUser.login.password}</p>
            `}
        />
        
      </div>
    </>
  );
};

export default ModalInfo;
