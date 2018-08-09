import React from 'react';
import Browse from './Browse/Browse';
import Nav from './Nav/Nav';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.listName = 'young-adult';
  }

  render() {
    return (
      <React.Fragment>
        <Nav />
        <Browse category={this.listName} />
      </React.Fragment>
    );
  }
}
