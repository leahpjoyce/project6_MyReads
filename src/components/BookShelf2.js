import React from 'react';
import Book from './Book';
import BookPage from './BookPage';

class BookShelf2 extends React.Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Want to Read</h2>
        <div className="bookshelf-books">
        <ol className="books-grid">
          <Book/>
        </ol>
        </div>
      </div>
    );
  }
}

export default BookShelf2;
