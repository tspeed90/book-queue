import React from 'react';
import Styled from 'styled-components';

const ActionButton = Styled.button`
  height: 3rem;
  width: 3rem;
  font-size: 1.5rem;
  background-color: #333;
  color: #E5BEBE;
  font-weight: bolder;
  align-self: center;
  border-radius: 50%;
  border: none;
  box-shadow: 1px 2px 7px 1px #999;
  margin: 1rem;
`;

const Button = ({ children, addBook }) => (
  <ActionButton onClick={addBook} children={children} />
);

export default Button;
