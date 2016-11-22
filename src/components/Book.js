import React from 'react';

const Book = React.createClass({
  render: function() {
    let book = this.props.book;
    return (
      <div className="col-md-3">
        <img src={book.avatar} className="img-thumbnail" alt={book.avatar}/>
        <p><strong>Title:</strong> {book.title}</p>
        <p><strong>Author:</strong> {book.author}</p>
        <p><strong>Published Year:</strong> {book.year}</p>
      </div>
    );
  }

});

module.exports = Book;
