// SavedBooks.js
import React from 'react';
import './styles.css';

const SavedBooks = ({ savedBooks, removeFromSaved }) => {
  return (
    <div className="saved-books-container"> {/* Added class name */}
      <h2>Your Saved Books</h2>
      {savedBooks.map((book) => (
        <div key={book.id} className="saved-book">
          <h3>{book.volumeInfo.title}</h3>
          <p>By: {book.volumeInfo.authors?.join(', ')}</p>
          <button onClick={() => removeFromSaved(book)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default SavedBooks;
