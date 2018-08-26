import React, { Component } from 'react';

import Button from '../Button/Button';

export default class BookDetails extends Component {
  constructor(props) {
    super(props);
  }

  addBookToShelf = () => {
    console.log('book added!');
  };

  render() {
    const { book } = this.props;
    return (
      <main>
        <div key={book.title}>
          <img src={book.thumbnail} alt="" />
          <Button addBook={this.addBookToShelf}>+</Button>
          <h2>{book.title}</h2>
          <p>
            Written by {book.author}
            <br />
            <br />
            {book.description}
          </p>
        </div>
      </main>
    );
  }
}
