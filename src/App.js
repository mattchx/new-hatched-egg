import './App.css';
import { useState, useEffect, createContext } from 'react';
import UserCards from './UserCards';



function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchOption, setSearchOption] = useState('name');
  //const [updatedUsers, setUpdatedUsers] = useState()

// Create a Context
const UsersContext = createContext();
// It returns an object with 2 values:
// { Provider, Consumer }
// https://daveceddia.com/usecontext-hook/

  const useFetch = async () => {
    //https://javascript.info/async-await#error-handling
    setLoading(true);
    try {
      const response = await fetch('https://randomuser.me/api/?results=10');
      const data = await response.json();
      console.log(data.results);
      setUsers(data.results);
      setLoading(false);
      setTimeout(() => console.log(UsersContext), 2500);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    setFilteredUsers(
      users.filter((user) => {
        if (searchOption === 'username') {
          return user.login.username.includes(search.toLowerCase());
        } else if (searchOption === 'email') {
          return user.email.includes(search.toLowerCase());
        } else {
          return (
            user.name.first.toLowerCase().includes(search.toLowerCase()) ||
            user.name.last.toLowerCase().includes(search.toLowerCase())
          );
        }
      })
    );
  }, [search, users, searchOption]);

  const updateUsers = (note, id) => {
    console.log(note, id);

    // const userArray =
    //   users.map((user) => {
    //     if (user.login.uuid === id) {
    //       return { ...user, note };
    //     } else {
    //       return user;
    //     }
    //   })

     const userArray =
      users.map((user) => {
        if (user.login.uuid === id) {
          return { ...user, note:note };
        } else {
          return user;
        }
      })
      // console.log(userArray)
      setUsers(userArray)

     
  };

  return (
    <div className='App'>
      <div className='header'>
        <h1>Random Users</h1>

        <select
          value={searchOption}
          onChange={(e) => {
            setSearchOption(e.currentTarget.value);
            console.log(searchOption);
          }}
        >
          <option selected value='name'>
            Name
          </option>
          <option value='email'>Email</option>
          <option value='username'>Username</option>
        </select>
        {/* https://www.youtube.com/watch?v=Q8JyF3wpsHc&t=173s */}
        <input
          type='text'
          placeholder='Search'
          onChange={(e) => setSearch(e.target.value)}
        />

        <button className='fetch-button' onClick={useFetch}>
          Fetch Data
        </button>
      </div>

      <div className='users'>
        {loading && console.log('loading')}
        {users && (
          <UsersContext.Provider users={users} >
          <UserCards
            filteredUsers={filteredUsers}
            setUsers={setUsers}
            updateUsers={updateUsers}
          />
          </UsersContext.Provider>
        )}
      </div>
    </div>
  );
}

export default App;
