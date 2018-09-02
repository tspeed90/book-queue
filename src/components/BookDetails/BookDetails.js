import React, { Component, Fragment } from 'react';
import Styled from 'styled-components';

import Button from '../Button/Button';

const Book = Styled.div`
  display: flex;
  flex: 0;
  background-color: #F3E9E9;
  margin: 0 0 1rem 0;
  padding: 1.5rem;
  border-radius: 5px;
  box-shadow: 0px 3px 7px -1px #bbb;
`;

const Cover = Styled.img`
  height: 12rem;
`;

const LeftColumn = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
`;

const BookInfo = Styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = Styled.h2`
  margin: 0;
  font-weight: lighter;
`;

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
      <Book>
        <LeftColumn>
          <Cover src={book.thumbnail} alt={`book cover of ${book.title}`} />
          <Button addBook={this.addBookToShelf}>+</Button>
        </LeftColumn>
        <BookInfo>
          <Title>{book.title}</Title>
          <p>
            Written by {book.author}
            <br />
            <br />
            {book.description}
          </p>
        </BookInfo>
      </Book>
    );
  }
}
