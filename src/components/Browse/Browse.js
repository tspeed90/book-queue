import React, { Component } from 'react';

import BookDetails from '../BookDetails/BookDetails';
import { getBooks } from '../../utils/fetchBooks';

export default class Browse extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { setBookList, genre } = this.props;
    getBooks(genre)
      .then(booksToDisplay => setBookList(booksToDisplay))
      .catch(error => console.log(error));
  }

  render() {
    const { bookList, genre } = this.props;
    return (
      <React.Fragment>
        <h1>Best Sellers in {genre}</h1>
        {bookList.map(book => {
          return <BookDetails key={book.title} book={book} {...this.props} />;
        })}
      </React.Fragment>
    );
  }
}
