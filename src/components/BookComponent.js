import React from 'react';
import Book from "./Book";

const BookComponent = React.createClass({
  render: function() {
    let books = this.props.books;
    if(books.length > 0) {
      return (
        <div>
          {
            books.map(function(book, index) {
              return (
                <Book key={index} book={book} />
              );
            })

          }
        </div>
      );
    }
    else {
      return <div className="align-center">No results found!</div>
    }
  }

});

module.exports = BookComponent;
