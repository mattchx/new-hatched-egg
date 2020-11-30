import React from 'react';

import './SearchBar.css';

const SearchBar = ({ searchOption, setOption, setSearch }) => {
  return (
    <div>
      <select className='select-css' value={searchOption} onChange={setOption}>
        <option selected value='name'>Name</option>
        <option value='email'>Email</option>
        <option value='username'>Username</option>
      </select>
      <input
          className='search'
          type='text'
          placeholder='Search'
          onChange={setSearch}
        />
    </div>
  );
};

export default SearchBar;
