import React, { Component, Fragment } from 'react';
import Styled from 'styled-components';

import Nav from '../Nav/Nav';
import GenreButton from '../GenreButton/GenreButton';
import genres from '../../data/genres.json';

const GenreList = Styled.main`
  @media (min-width: 800px) {
    margin: 0 3rem;
  }

  margin: 0 10rem;
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  justify-content: center;
`;

const Title = Styled.h1`
  text-align: center;
  font-weight: lighter;
`;

const Subtitle = Styled.h2`
  text-align: center;
  font-weight: lighter;
`;

const GenreGridItem = Styled.div`
  margin: 0 1rem 5px 1rem;
`;

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <Nav />
        <Title>Best Seller Categories</Title>
        <Subtitle>Select a Category Below</Subtitle>
        <GenreList>
          {genres.results.map(genre => {
            return (
              <GenreGridItem key={genre.list_name}>
                <GenreButton
                  key={genre.list_name_encoded}
                  genre={genre.list_name_encoded}
                >
                  {genre.display_name}
                </GenreButton>
                <br />
              </GenreGridItem>
            );
          })}
        </GenreList>
      </Fragment>
    );
  }
}
