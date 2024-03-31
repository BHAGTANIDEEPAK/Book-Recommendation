// SearchBar.js
import React, { useState } from 'react';
import './styles.css';


const SearchBar = ({ onSearch }) => {
  const [title, setTitle] = useState('');

  const handleTitleSearch = () => {
    onSearch({ query: title });
  };
  return (
    <div className='search-bar'>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Search by title" />
      <button onClick={handleTitleSearch}>Search Title</button>
    </div>
  );
};
export default SearchBar;
