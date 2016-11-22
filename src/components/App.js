import React from 'react';
import logo from './../logo.svg';
import './../App.css';
import SearchComponent from './SearchComponent'
import BookComponent from './BookComponent'
import allBooks from './../data/books'
import Helper from './../utils/helper'


const App = React.createClass({
  getInitialState: function() {
    return {
      books: allBooks,
      searchValue: ''
    };
  },

  updateValue: function(e) {
    e.preventDefault();
    this.setState({searchValue: e.target.value})
  },

  handleSearchTitle: function(e) {
    e.preventDefault();
    let input = this.state.searchValue;
    let result = this.state.books.map(function(book) {
      if(Helper.searchTitle(input, book)) {
        return book;
      }
      return false;
    });

    result = result.filter(function(obj) {
      return obj !== false;
    })
    console.log('result', result)

    this.setState({books: result})

    console.log('state', this.state)
  },

  handleSearchAuthor: function(e) {
    e.preventDefault();
    let input = this.state.searchValue;
    let result = this.state.books.map(function(book) {
      if(Helper.searchAuthor(input, book)) {
        return book;
      }
      return false;
    });

    result = result.filter(function(obj) {
      return obj !== false;
    })
    console.log('result', result)

    this.setState({books: result})

    console.log('state', this.state)
  },

  handleSearchYear: function(e) {
    e.preventDefault();
    let input = this.state.searchValue;
    let result = this.state.books.map(function(book) {
      if(Helper.searchYear(input, book)) {
        return book;
      }
      return false;
    });

    result = result.filter(function(obj) {
      return obj !== false;
    })

    this.setState({books: result})

    console.log('state', this.state)
  },

  render: function () {

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Library App</h2>
        </div>
        <div className="App-container">
          <SearchComponent searchValue={this.state.searchValue}
            updateValue={this.updateValue} handleSearchTitle={this.handleSearchTitle}
            handleSearchYear={this.handleSearchYear}
            handleSearchAuthor={this.handleSearchAuthor} />
          <BookComponent {...this.state} />
        </div>
      </div>
    );
  }
})

export default App;
