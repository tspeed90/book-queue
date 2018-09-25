import _ from 'lodash';
import { array } from 'prop-types';
import Styled from 'styled-components';
import React, { Fragment } from 'react';

import Nav from '../Nav/Nav';
import BookDetails from '../BookDetails/BookDetails';

const ShelfList = Styled.main`
  margin: 0 15rem;
`;

const Title = Styled.h1`
  text-align: center;
  font-weight: lighter;
`;

const propTypes = {
  booksInQueue: array.isRequired
};

const Shelf = ({ booksInQueue }) => (
  <Fragment>
    <Nav />
    <ShelfList>
      <Title>Your Shelves</Title>
      {_.size(booksInQueue) > 0 &&
        _.map(booksInQueue, book => {
          return <BookDetails key={book.title} book={book} children="✓" />;
        })}
    </ShelfList>
  </Fragment>
);

Shelf.propTypes = propTypes;

export default Shelf;
