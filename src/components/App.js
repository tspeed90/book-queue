import React, { Component } from 'react';
import BrowseContainer from '../containers/BrowseContainer';
import Nav from './Nav/Nav';
import { store } from '../store';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.listName = 'young-adult';
  }

  render() {
    return (
      <React.Fragment>
        <Nav />
        <BrowseContainer store={store} category={this.listName} />
      </React.Fragment>
    );
  }
}
