import React from 'react';
import Book from "./Book";

const BookComponent = React.createClass({
  render: function() {
    let books = this.props.books;
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

});

export default BookComponent;
