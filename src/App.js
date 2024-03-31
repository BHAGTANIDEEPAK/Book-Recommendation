import React, { useState } from 'react';
import SearchBar from './SearchBar';
import BookList from './BookList';
import './styles.css';

const App = () => {
  const [books, setBooks] = useState([]);

  const handleSearch = async ({ query, genre, author }) => {
    try {
      let url = `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=20&key=AIzaSyCmoNDeC2OVjsAEIEy_PUkvwOOyZhDXIBU`;
      if (genre) {
        url += `+subject:${genre}`;
      }
      if (author) {
        url += `+inauthor:${author}`;
      }
      const response = await fetch(url);
      const data = await response.json();
      setBooks(data.items || []);
    } catch (error) {
      console.error('Error fetching book data:', error);
    }
  };

  return (
    <div className="container">
      <h1>Book Recommendation</h1>
      <SearchBar onSearch={handleSearch} />
      <BookList books={books} />
    </div>
  );
};

export default App;