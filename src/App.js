import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import { Route } from 'react-router-dom';
import BookPage from './components/BookPage';
import BookSearch from './components/BookSearch';

class BooksApp extends React.Component {
  state = {
    books: []
  }

   componentDidMount() {
       BooksAPI.getAll().then((books) => {
         this.setState({ books })
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
          book = {this.state.books}
          moveShelf= {this.moveShelf}
         />
       )}/>

    <Route path='/search' component={BookSearch}/>
    </div>
    )
  }
}

export default BooksApp;
