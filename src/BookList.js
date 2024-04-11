import React, { useState } from 'react';
import SavedBooks from './SavedBooks';
import './styles.css';

const BookList = ({ books }) => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [savedBooks, setSavedBooks] = useState([]);
  const [viewSavedBooks, setViewSavedBooks] = useState(false); // State to toggle view

  const handleAddToSaved = (book) => {
    // Check if the book is already in savedBooks
    if (!savedBooks.find((savedBook) => savedBook.id === book.id)) {
      setSavedBooks([...savedBooks, book]);
    }
  };

  const handleRemoveFromSaved = (book) => {
    const updatedSavedBooks = savedBooks.filter((savedBook) => savedBook.id !== book.id);
    setSavedBooks(updatedSavedBooks);
  };

  const handleClick = (book) => {
    setSelectedBook(book === selectedBook ? null : book);
    setShowFullDescription(false); // Close description when a card is clicked
  };

  const truncateDescription = (description, maxLength) => {
    if (description) {
      return description.length > maxLength ? `${description.slice(0, maxLength)}...` : description;
    } else {
      return ''; // Return an empty string if the description is undefined
    }
  };

  const toggleView = () => {
    setViewSavedBooks(!viewSavedBooks);
  };

  return (
    <div>
      {/* Toggle button/icon to switch between viewing all books and saved books */}
      <button className='view-saved-books-button' onClick={toggleView} style={{ position: 'fixed', top: '20px', right: '20px', zIndex: '1000' }}>
        {viewSavedBooks ? 'View All Books' : 'View Saved Books'}
      </button>

      {viewSavedBooks ? (
        <div>
          {/* Display saved books */}
          <SavedBooks savedBooks={savedBooks} removeFromSaved={handleRemoveFromSaved} />
          {savedBooks.length === 0 && <p style={{color:'white'}}>No saved books</p>} {/* Display message if no saved books */}
        </div>
      ) : (
        <div className="book-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: '20px' }}>
          {books.map((book) => (
            <div key={book.id} className="book-card" onClick={() => handleClick(book)} style={{ display: 'flex', borderRadius: '5px', overflow: 'hidden', backgroundColor: '#fff' }}>
              <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} style={{ width: '150px', height: '200px' }} />
              <div className={`book-details`} style={{ flex: 1, padding: '20px' }}>
                <h3 style={{ marginTop: 0, fontSize: '20px' }}>{book.volumeInfo.title}</h3>
                <p>By: {book.volumeInfo.authors?.join(', ')}</p>
                <p>Publisher: {book.volumeInfo.publisher}</p>
                <p>Published Date: {book.volumeInfo.publishedDate}</p>
                <p>Categories: {book.volumeInfo.categories?.join(', ')}</p>
                <p>Description: {truncateDescription(book.volumeInfo.description, 200)}</p>
                <button onClick={() => handleAddToSaved(book)}>Add to Your List</button>
                <a href={book.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer">Preview</a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookList;
