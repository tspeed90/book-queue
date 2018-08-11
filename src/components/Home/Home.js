import React, { Component } from 'react';

import CategoryButton from '../CategoryButton/CategoryButton';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <CategoryButton>Fiction</CategoryButton>
        <CategoryButton>Non-Fiction</CategoryButton>
      </main>
    );
  }
}
