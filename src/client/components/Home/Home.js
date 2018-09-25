import _ from 'lodash';
import Styled from 'styled-components';
import React, { Fragment } from 'react';

import Nav from '../Nav/Nav';
import genres from '../../data/genres.json';
import GenreButton from '../GenreButton/GenreButton';

const GenreList = Styled.main`
  margin: 0 15rem;
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
  margin: 1rem;
`;

const Home = () => (
  <Fragment>
    <Nav />
    <Title>Best Seller Categories</Title>
    <Subtitle>Select a Category Below</Subtitle>
    <GenreList>
      {_.size(genres.results) > 0 &&
        _.map(genres.results, genre => (
          <GenreGridItem key={genre.list_name}>
            <GenreButton
              key={genre.list_name_encoded}
              genre={genre.list_name_encoded}
            >
              {genre.display_name}
            </GenreButton>
            <br />
          </GenreGridItem>
        ))}
    </GenreList>
  </Fragment>
);

export default Home;
