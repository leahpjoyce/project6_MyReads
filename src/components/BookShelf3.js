import React from 'react';
import Book from './Book';
import BookPage from './BookPage';

class BookShelf3 extends React.Component {
  render() {
    let books = this.props.books
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Read</h2>
        <div className="bookshelf-books">
        <ol className="books-grid">
        <Book/>
        </ol>
        </div>
      </div>
    );
  }
}

export default BookShelf3;
