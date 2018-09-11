import React from 'react';
import {Link} from 'react-router-dom';
import Book from './Book';
import Header from './Header';
import BookShelf1 from './BookShelf1';
import BookShelf2 from './BookShelf2';
import BookShelf3 from './BookShelf3';

class BookPage extends React.Component {
  render() {
    return (
       <div className="list-books">
       <Header/>
         <div className="list-books-content">
           <div>
            <BookShelf1/>
            <BookShelf2/>
            <BookShelf3/>
           </div>
         </div>
         <div className="open-search">
           <Link to="/search">Add a book</Link>
         </div>
       </div>
    )
  }
}

 export default BookPage;
