import React from 'react';

class Book extends React.Component {

  render () {
    let thumbnail = this.props.book.imageLinks ? this.props.book.imageLinks.thumbnail : '';

    //test what's inside in props
    //console.log(this.props);

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${thumbnail}")` }}></div>
          <div className="book-shelf-changer">
          <select
              value={this.props.currentShelf}
            onChange = {(event) => this.props.updateBook(
              this.props.book, event.target.value
          )}
          >
          <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.authors}</div>
      </div>
    );
  }
}
 export default Book;
