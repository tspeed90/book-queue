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
  border-radius: 5px;
  box-shadow: 0px 3px 7px -1px #bbb;
  width: 15rem;
  height: fit-content;
  margin: 0 1rem;

  @media (min-width: 800px) {
    width: 12rem;
    height: 8rem;
  }
  `;

const GenreLink = Styled(Link)`
  color: #222;
  text-decoration: none;
  font-size: 1.2rem;
  padding: 1rem;

  @media (min-width: 800px) {
    padding: 2rem;
    }

  :focus, :hover {
    text-decoration: underline;
    outline: none;
  }
  
`;

const GenreButton = ({ children, genre }) => {
  return (
    <Button>
      <GenreLink to={`/browse/${genre}`}>{children}</GenreLink>
    </Button>
  );
};

export default GenreButton;
