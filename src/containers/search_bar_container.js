import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather} from '../actions';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({term: event.target.value});
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchWeather(this.state.term);

    // clear search string after submit
    this.setState({term: ''});
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch)
}

// We're not mapping state to props, hence the null as a first argument
export default connect(null, mapDispatchToProps)(SearchBar);