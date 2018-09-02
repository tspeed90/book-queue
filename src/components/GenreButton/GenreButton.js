import React from 'react';
import { Link } from '@reach/router';
import Styled from 'styled-components';

const Button = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #F3E9E9;
  color: #333;
  text-align: center;
  width: 12rem;
  height: 8rem;
  margin: 0 auto;
  border-radius: 5px;
`;

const GenreLink = Styled(Link)`
  padding: 2rem;
`;

const GenreButton = ({ children, genre }) => {
  return (
    <Button>
      <GenreLink to={`/browse/${genre}`}>{children}</GenreLink>
    </Button>
  );
};

export default GenreButton;
