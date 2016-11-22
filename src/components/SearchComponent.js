import React from 'react';

var SearchComponent = React.createClass({
  render() {
    console.log('search props', this.props)
    return (
      <div>
        <p className="App-intro">Search for books here</p>
        <input type="text" className="form-control" placeholder="search"
          onChange={this.props.updateValue} value={this.props.searchValue} /><br/>

        <button type="submit" className="btn btn-primary" onClick={this.props.handleSearchTitle}>
          Search by Title
        </button>
        <button type="submit" className="btn btn-primary" onClick={this.props.handleSearchAuthor}>
          Search by Author
        </button>
        <button type="submit" className="btn btn-primary" onClick={this.props.handleSearchYear}>
          Search by Year
        </button> <hr/>
      </div>
    );
  }
});

export default SearchComponent;
