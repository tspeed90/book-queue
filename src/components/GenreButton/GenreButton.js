import React from 'react';
import { Link } from '@reach/router';

const GenreButton = ({ children, genre }) => {
  return <Link to={`/browse/${genre}`}>{children}</Link>;
};

export default GenreButton;
