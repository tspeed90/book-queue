import React, { Component } from 'react';
import { getBooks } from '../../utils/fetchBooks';

export default class Browse extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { setBookList, genre } = this.props;
    getBooks(genre)
      .then(booksToDisplay => setBookList(booksToDisplay))
      .then(() => console.log(this.props))
      .catch(error => console.log(error));
  }

  render() {
    const { bookList, genre } = this.props;
    return (
      <main>
        <h1>Best Sellers in {genre}</h1>
        {bookList.map(book => {
          return (
            <div key={book.title}>
              <img src={book.thumbnail} alt="" />
              <h2>{book.title}</h2>
              <p>
                Written by {book.author}
                <br />
                <br />
                {book.description}
              </p>
            </div>
          );
        })}
      </main>
    );
  }
}
