import React from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import sortBy from 'sort-by'

class BookSearch extends React.Component {

    state = {
      query: '',
      showBooks: []
    }

    updateQuery = (query) => {
      if (query) {
        BooksAPI.search(query).then((showBooks) => {
          if (showBooks.error){
            this.setState({ showBooks: []})
          } else {
            this.setState({showBooks : showBooks})
          }
        })
      } else {
        this.setState({ showBooks: []})
      }
    }

  render() {

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
              this.state.showBooks.map(showBooks => (
                <li key = {showBooks.id}>
                  <Book
                    book={showBooks}
                    moveShelf = {this.props.moveShelf}
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
 export default BookSearch
