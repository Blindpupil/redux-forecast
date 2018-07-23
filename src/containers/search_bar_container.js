import React, { Component } from 'react'

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({term: event.target.value});
  }

  onFormSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input className="form-control" type="text"
               placeholder="Get a forecast for your favorite cities"
               value={this.state.term}
               onChange={this.onInputChange}
        />

        <span className="input-group-btn">
          <button type="submit" className="btn btn-outline-info"> Search </button>
        </span>
      </form>
    )
  }
}

export default SearchBar;