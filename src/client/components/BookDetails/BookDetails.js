import React, { Component, Fragment } from 'react';
import Styled from 'styled-components';

import Button from '../Button/Button';

const Book = Styled.div`
display: flex;
  flex-direction: column;
  background-color: #F3E9E9;
  flex: 0;
  margin: 0 0 1rem 0;
  padding: 1.5rem;
  border-radius: 5px;
  box-shadow: 0px 3px 7px -1px #bbb;
  
@media(min-width: 700px) {
  flex-direction: row;  
}
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

const ReadMore = Styled.button`
  border: none;
  text-decoration: underline;
  color: #E5BEBE;
  background: inherit;
`;

export default class BookDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showFullDescription: false
    };
  }

  addBookToShelf = () => {
    const { addToShelf, book } = this.props;
    addToShelf(book);
  };

  toggleReadMore = () => {
    const { showFullDescription } = this.state;
    this.setState({
      showFullDescription: !showFullDescription
    });
  };

  render() {
    const { book } = this.props;
    const { showFullDescription } = this.state;
    const shortenedDescription = book.description
      ? book.description.substring(0, 500)
      : '';
    return (
      <Book>
        <LeftColumn>
          <Cover src={book.thumbnail} alt={`book cover of ${book.title}`} />
          <Button addBook={this.addBookToShelf}>{this.props.children}</Button>
        </LeftColumn>
        <BookInfo>
          <Title>{book.title}</Title>
          <p>
            Written by {book.author}
            <br />
            <br />
            {showFullDescription === true
              ? book.description
              : shortenedDescription}
            <ReadMore onClick={this.toggleReadMore}>
              {showFullDescription === true ? 'Read less' : 'Read more'}
            </ReadMore>
          </p>
        </BookInfo>
      </Book>
    );
  }
}
