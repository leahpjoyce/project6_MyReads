import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import BookPage from './BookPage'
import BookSearch from './BookSearch'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState( { books } )
    })
  }

  moveShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);

    BooksAPI.getAll().then((books) => {
      this.setState( { books } )
    })
  }

  render() {
    return (
      <div className="app">
      <Route exact path='/' render={() => (
        <BookPage
          books={this.state.books}
          moveShelf= {this.moveShelf}
          />
    )}/>
    <Route path='/search' render={() => (
      <BookSearch
      moveShelf= {this.moveShelf}
      />
  )}/>
    </div>
    )
  }
}

export default BooksApp
