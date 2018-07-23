import React, { Component } from 'react';
import SearchBar from '../containers/search_bar_container';

export default class App extends Component {
  render() {
    return (
      <div className="mt-3">
        <SearchBar/>
      </div>
    );
  }
}
