import React from 'react';

const Button = props => {
  const { addBook } = props;
  return <button onClick={addBook}>{props.children}</button>;
};

export default Button;
