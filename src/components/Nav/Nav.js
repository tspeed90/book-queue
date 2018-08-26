import React from 'react';
import { Link } from '@reach/router';

const nav = () => {
  return (
    <nav>
      <div>Book Queue</div>
      <div>Tammy</div>
      <Link to={'/shelf'}>See your shelf</Link>
      <hr />
    </nav>
  );
};

export default nav;
