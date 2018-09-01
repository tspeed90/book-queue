import React from 'react';

const Button = ({ children, addBook }) => {
  return <button onClick={addBook}>{children}</button>;
};

export default Button;
