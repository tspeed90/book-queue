import React from 'react';
import { Link } from '@reach/router';
import Styled from 'styled-components';

const NavWrap = Styled.nav`
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

const Nav = () => (
  <NavWrap>
    <Link to={'/'}>
      <img src="/public/bq_logo.png" />
    </Link>
    <UserDetails>
      Tammy
      <Link to={'/shelf'}>See your shelf</Link>
    </UserDetails>
  </NavWrap>
);

export default Nav;
