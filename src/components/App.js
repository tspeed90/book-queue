import React, { Component } from 'react';
import { Router } from '@reach/router';

import Nav from './Nav/Nav';
import Home from './Home/Home';
import BrowseContainer from '../containers/BrowseContainer';
import ShelfContainer from '../containers/ShelfContainer';
import { store } from '../store';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Nav />
        <Router>
          <Home path="/" />
          <BrowseContainer store={store} path="/browse/:genre" />
          <ShelfContainer store={store} path="/shelf" />
        </Router>
      </React.Fragment>
    );
  }
}
