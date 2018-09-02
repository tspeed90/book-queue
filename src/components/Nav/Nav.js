import React from 'react';
import { Link } from '@reach/router';
import Styled from 'styled-components';

const Nav = Styled.nav`
  background: #E5BEBE;
  display: flex;
  justify-content: space-between;
  padding: 5px;

  `;

const UserDetails = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.2rem;
  margin-right: 1rem;
`;

const nav = () => {
  return (
    <Nav>
      <Link to={'/'}>
        <img src="/bq_logo.png" />
      </Link>
      <UserDetails>
        Tammy
        <Link to={'/shelf'}>See your shelf</Link>
      </UserDetails>
    </Nav>
  );
};

export default nav;
