// SearchBar.js
import React, { useState } from 'react';
import './styles.css';


const SearchBar = ({ onSearch }) => {
  const [title, setTitle] = useState('');

  const handleTitleSearch = () => {
    onSearch({ query: title });
  };
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleTitleSearch();
    }
  };
  return (
    <div className='search-bar'>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} 
      onKeyPress={handleKeyPress}
      placeholder="Search by title" />
      <button onClick={handleTitleSearch} >Search Title</button>
    </div>
  );
};
export default SearchBar;
