import React, { Component } from 'react';

import CategoryButton from '../CategoryButton/CategoryButton';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <CategoryButton genre="hardcover-fiction">Fiction</CategoryButton>
        <CategoryButton genre="hardcover-nonfiction">
          Non-Fiction
        </CategoryButton>
      </main>
    );
  }
}
