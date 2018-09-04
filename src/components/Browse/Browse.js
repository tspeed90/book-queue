import React, { Component, Fragment } from 'react';
import Styled from 'styled-components';

import Nav from '../Nav/Nav';
import BookDetails from '../BookDetails/BookDetails';
import { getBooks } from '../../utils/fetchBooks';

const BrowseBookList = Styled.main`  
  margin: 0 15rem;
`;

const Title = Styled.h1`
  text-align: center;
  font-weight: lighter;
`;
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
      <Fragment>
        <Nav />
        <BrowseBookList>
          <Title>Best Sellers in {genre}</Title>
          {bookList.map(book => {
            return <BookDetails key={book.title} book={book} {...this.props} />;
          })}
        </BrowseBookList>
      </Fragment>
    );
  }
}
