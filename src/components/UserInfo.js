import './components.css';

const BUTTON_WRAPPER_STYLES = {
  position: 'relative',
  zIndex: 1,
};

const UserInfo = ({ user, index, handleClick, setIsOpen}) => {
  return (
    <div className='user' key={index} id={user.login.uuid}>
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
      <div
        style={BUTTON_WRAPPER_STYLES}
        onClick={(e) =>
          handleClick(e.target.parentElement.parentElement.getAttribute('id'))
        }
      >
        <button
          className='btn-card'
          onClick={() => {
            setIsOpen(true);
          }}
        >
          See More
        </button>
      </div>
    </div>
  );
};

export default UserInfo;
