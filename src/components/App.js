import React from 'react';
import Browse from './Browse';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.listName = 'young-adult';
  }

  render() {
    return <Browse category={this.listName} />;
  }
}
