import React, { Component, Fragment } from 'react';
import { Router } from '@reach/router';

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
      <Fragment>
        <Router>
          <Home path="/" />
          <BrowseContainer store={store} path="/browse/:genre" />
          <ShelfContainer store={store} path="/shelf" />
        </Router>
      </Fragment>
    );
  }
}
