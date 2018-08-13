import React, { Component } from 'react';

import GenreButton from '../GenreButton/GenreButton';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <GenreButton genre="hardcover-fiction">Fiction</GenreButton>
        <GenreButton genre="hardcover-nonfiction">Non-Fiction</GenreButton>
      </main>
    );
  }
}
