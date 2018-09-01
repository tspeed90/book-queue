import React, { Component, Fragment } from 'react';
import BookDetails from '../BookDetails/BookDetails';

export default class Shelf extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { booksInQueue } = this.props;
    return (
      <Fragment>
        <h1>Your Shelves</h1>
        {booksInQueue.map(book => {
          return <BookDetails key={book.title} book={book} />;
        })}
      </Fragment>
    );
  }
}
