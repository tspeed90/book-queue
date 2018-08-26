import React, { Component } from 'react';

export default class Shelf extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h1>{this.props.booksInQueue[0].title}</h1>;
  }
}
