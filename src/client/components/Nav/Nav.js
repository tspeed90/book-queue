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

const Logo = Styled.div`
  display: flex;
  font-size: 1.5rem;
  align-items: center;
`;

const LogoText = Styled.a`
  margin: 0 1rem;
  font-size: 1.7rem;
  text-decoration: none;
  color: #333;
`;

const nav = () => {
  return (
    <Nav>
      <Logo>
        <Link
          to={'/'}
          style={{
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <img src="/public/bq_logo.png" />
          <LogoText>book queue</LogoText>
        </Link>
      </Logo>
      <UserDetails>
        Tammy
        <Link to={'/shelf'}>See your shelf</Link>
      </UserDetails>
    </Nav>
  );
};

export default nav;
