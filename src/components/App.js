import React, { Component } from 'react';
import Nav from './Nav/Nav';
import Home from './Home/Home';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.listName = 'young-adult-hardcover';
  }

  render() {
    return (
      <React.Fragment>
        <Nav />
        <Home />
      </React.Fragment>
    );
  }
}
