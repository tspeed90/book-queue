import React from 'react';
import Styled from 'styled-components';

const ActionButton = Styled.button`
  height: 3rem;
  width: 3rem;
  font-size: 1.5rem;
  background-color: #E5BEBE;
  color: #333;
  align-self: center;
  border-radius: 50%;
  border: 1px solid #999;
  margin: 1rem;
`;

const Button = ({ children, addBook }) => {
  return <ActionButton onClick={addBook}>{children}</ActionButton>;
};

export default Button;
