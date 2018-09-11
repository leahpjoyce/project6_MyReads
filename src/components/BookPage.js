import React from 'react';
import Book from './Book';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


class BookPage extends React.Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    updateBook: PropTypes.func.isRequired
  }

  render() {
    let bookName = this.props.books,
        moveBook = this.props.updateBook

    //test what's inside in props
    //console.log(this.props);

    return (
      <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {bookName.filter(book => book.shelf === 'currentlyReading').map((book) => (
                        <li key={book.id}>
                          <Book book= {book}
                            updateBook = {moveBook}
                          />
                        </li>
                      ))}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                {bookName.filter(book => book.shelf === 'wantToRead').map((book) => (
                      <li key={book.id}>
                        <Book book= {book}
                          updateBook = {moveBook}
                        />
                      </li>
                    ))}
              </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                {bookName.filter(book => book.shelf === 'read').map((book) => (
                      <li key={book.id}>
                        <Book book= {book}
                          updateBook = {moveBook}
                        />
                      </li>
                    ))}
              </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

 export default BookPage;
