import _ from 'lodash';
import Styled from 'styled-components';
import { func, string, array } from 'prop-types';
import React, { Component, Fragment } from 'react';

import Nav from '../Nav/Nav';
import BookDetails from '../BookDetails/BookDetails';

const BrowseBookList = Styled.main`  
  margin: 0 15rem;
`;

const Title = Styled.h1`
  text-align: center;
  font-weight: lighter;
`;

const propTypes = {
  bookList: array.isRequired,
  setBookList: func.isRequired,
  addToShelf: func.isRequired,
  genre: string.isRequired
};

class Browse extends Component {
  componentDidMount() {
    this.props.setBookList();
  }

  render() {
    const { bookList, genre } = this.props;
    return (
      <Fragment>
        <Nav />
        <BrowseBookList>
          <Title>Best Sellers in {genre}</Title>
          {_.size(bookList) > 0 &&
            _.map(bookList, book => {
              return (
                <BookDetails
                  key={book.title}
                  book={book}
                  {...this.props}
                  children="+"
                />
              );
            })}
        </BrowseBookList>
      </Fragment>
    );
  }
}

Browse.propTypes = propTypes;

export default Browse;
