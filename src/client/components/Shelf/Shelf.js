import React, { Component, Fragment } from 'react';
import Styled from 'styled-components';

import Nav from '../Nav/Nav';
import BookDetails from '../BookDetails/BookDetails';

const ShelfList = Styled.main`
  width: 90%;
  margin: 0 auto;
  @media (min-width: 800px) {
    max-width: 900px;
    margin: 0 auto;
  }
`;

const Title = Styled.h1`
  text-align: center;
  font-weight: lighter;
`;

export default class Shelf extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { booksInQueue } = this.props;
    return (
      <Fragment>
        <Nav />
        <ShelfList>
          <Title>Your Shelves</Title>
          {booksInQueue.map(book => {
            return <BookDetails key={book.title} book={book} children="✓" />;
          })}
        </ShelfList>
      </Fragment>
    );
  }
}
