import './App.css';
import { useState, useEffect } from 'react';
import UserCards from './UserCards';

// import Modal from './Modal'

// const BUTTON_WRAPPER_STYLES = {
//   position: 'relative',
//   zIndex: 1
// }

// const OTHER_CONTENT_STYLES = {
//   position: 'relative',
//   zIndex: 2,
//   backgroundColor: 'red',
//   padding: '10px'
// }

// function () {
//   const [isOpen, setIsOpen] = useState(false)
//   return (
//     <>
//       <div style={BUTTON_WRAPPER_STYLES} onClick={() => console.log('clicked')}>
//         <button onClick={() => setIsOpen(true)}>Open Modal</button>

//         <Modal open={isOpen} onClose={() => setIsOpen(false)}>
//           Fancy Modal
//         </Modal>
//       </div>

//       <div style={OTHER_CONTENT_STYLES}>Other Content</div>
//     </>
//   )
// }


function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);

  const useFetch = async () => {
    //https://javascript.info/async-await#error-handling
    setLoading(true);
    try {
      const response = await fetch('https://randomuser.me/api/?results=10');
      const data = await response.json();
      console.log(data.results);
      setUsers(data.results);
      setLoading(false);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    setFilteredUsers(
      users.filter( user => {
        return (
          user.name.first.toLowerCase().includes(search.toLowerCase()) ||
          user.name.last.toLowerCase().includes(search.toLowerCase())
        )
      
      })
    )
  },[search, users])

  return (
    <div className='App'>
      <div className='header'>
        <h1>Random Users</h1>

        {/* https://www.youtube.com/watch?v=Q8JyF3wpsHc&t=173s */}
        <input type='text' placeholder='Search' 
         onChange={e => setSearch(e.target.value)} />

        <button className='fetch-button' onClick={useFetch}>
          Fetch Data
        </button>
      </div>

      <div className='users'>
        {loading && console.log('loading') }
        {users && <UserCards users={filteredUsers} />}
      </div>
    </div>
  );
}

export default App;
