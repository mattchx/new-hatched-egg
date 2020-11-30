import './App.css';
import { useState, useEffect } from 'react';
import UserCards from './components/UserCards';
import SearchBar from './components/SearchBar';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchOption, setSearchOption] = useState('name');

  const useFetch = async () => {
    //https://javascript.info/async-await#error-handling
    setLoading(true);
    try {
      const response = await fetch('https://randomuser.me/api/?results=10');
      const data = await response.json();
      const usersHaveNotes = data.results.map((user) => {
        return { ...user, note: '' };
      });
      console.log(usersHaveNotes);
      setUsers(usersHaveNotes);
      setFilteredUsers(usersHaveNotes);
      setLoading(false);
      setTimeout(function () {
        console.log(users);
      }, 3000);
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
    const updatedUserArray = users.map((user) => {
      if (user.login.uuid === id) {
        console.log('matched id');
        return { ...user, note: note };
      } else {
        return user;
      }
    });
    setUsers(updatedUserArray);
    console.log(`note:${note} has been added to user:${id}`);
  };

  return (
    <div className='App'>
      <div className='header'>
        <h1>Random Users</h1>

        <SearchBar
          searchOption={searchOption}
          setOption={(e) => {
            setSearchOption(e.target.value);
            console.log(searchOption);
          }}
          setSearch={(e) => setSearch(e.target.value)}
        />

        <button className='fetch-button' onClick={useFetch}>
          Fetch Data
        </button>
      </div>

      <div>
        {loading && console.log('loading')}
        {users && (
          <UserCards
            filteredUsers={filteredUsers}
            setUsers={setUsers}
            updateUsers={updateUsers}
          />
        )}
      </div>
    </div>
  );
}

export default App;
