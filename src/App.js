import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import { Route } from 'react-router-dom';
import BookPage from './components/BookPage';
import BookSearch from './components/BookSearch';


class BooksApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: []
        }
    }

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({ books })
        })
    }

    updateBook = (book, shelf) => {
        BooksAPI.update(book, shelf);

        BooksAPI.getAll().then((books) => {
            this.setState({ books })
        })

    }

    render() {
    return (
      <div className="app">
      <Route exact path='/' render={() => (
        <BookPage
          books={this.state.books}
          updateBook= {this.updateBook}
          />
    )}/>
    <Route path='/search' render={() => (
      <BookSearch
      updateBook= {this.updateBook}
      books={this.state.books}
      />
  )}/>
    </div>
    )
  }
}

export default BooksApp;
