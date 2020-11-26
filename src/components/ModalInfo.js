import './components.css';

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
        <h3>Contact</h3>
        <p>Email: {selectedUser.email}</p>
        <p>Phone: {selectedUser.phone}</p>
        <h3>Time</h3>
        <p>Birth Year: {'' + new Date(selectedUser.dob.date).getFullYear()}</p>
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
  );
};

export default ModalInfo;
