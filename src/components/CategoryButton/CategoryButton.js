import React from 'react';
import { Link } from '@reach/router';

const CategoryButton = ({ children, genre }) => {
  return <Link to={`/browse/${genre}`}>{children}</Link>;
};

export default CategoryButton;
