// BookList.js
import React, { useState } from 'react';
import './styles.css';



const BookList = ({ books }) => {
  const [selectedBook, setSelectedBook] = useState(null);

  const handleClick = (book) => {
    if (selectedBook === book) {
      setSelectedBook(null);
    } else {
      setSelectedBook(book);
    }
  };

  return (
    <div className="book-list">
      {books.map((book) => (
        <div key={book.id} className="book-card">
          <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} onClick={() => handleClick(book)} />
          {selectedBook === book && (
            <div className="book-details">
              <h3>{book.volumeInfo.title}</h3>
              <p>By: {book.volumeInfo.authors?.join(', ')}</p>
              <p>Publisher: {book.volumeInfo.publisher}</p>
              <p>Published Date: {book.volumeInfo.publishedDate}</p>
              <p>Categories: {book.volumeInfo.categories?.join(', ')}</p>
              <p>Description: {book.volumeInfo.description}</p>
              <a href={book.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer">Preview</a>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default BookList;
