import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import * as BooksAPI from '../BooksAPI';
import Book from './Book';
import sortBy from 'sort-by'

class BookSearch extends React.Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    updateBook: PropTypes.func.isRequired
  }

    state = {
      query: '',
      showingBooks: []
    }

    updateQuery = (query) => {
      if (query) {
        BooksAPI.search(query).then((showingBooks) => {
          if (showingBooks.error){
            this.setState({showingBooks: []});
          } else {
            this.setState({showingBooks});
          }
        })
      } else {
        this.setState({ showingBooks: []})
      }
    }

  render() {
    //test what's inside in props
    //console.log(this.props);

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author"
            onChange={(e) => this.updateQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {
              this.state.showingBooks.map(books => (
                <li key = {books.id}>
                  <Book
                    book={books}
                    updateBook = {this.props.updateBook}
                    />
                </li>
              ))
            }
          </ol>
        </div>
      </div>
    );
  }
}
 export default BookSearch;
