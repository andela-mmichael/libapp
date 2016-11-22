import React from 'react';

const BookComponent = React.createClass({
  render: function() {
    let book = this.props.book;
    return (
      <div className="col-md-3">
        <img src={book.avatar} className="img-thumbnail" alt={book.avatar}/>
        <p>Title: {book.title}</p>
        <p>Author: {book.author}</p>
        <p>Published Year: {book.year}</p>
      </div>
    );
  }

});

export default BookComponent;
