import React, { Component, Fragment } from 'react';

import Button from '../Button/Button';

export default class BookDetails extends Component {
  constructor(props) {
    super(props);
  }

  addBookToShelf = () => {
    const { addToShelf, book } = this.props;
    addToShelf(book);
  };

  render() {
    const { book } = this.props;
    return (
      <div>
        <img src={book.thumbnail} alt={`book cover of ${book.title}`} />
        <Button addBook={this.addBookToShelf}>+</Button>
        <h2>{book.title}</h2>
        <p>
          Written by {book.author}
          <br />
          <br />
          {book.description}
        </p>
      </div>
    );
  }
}
