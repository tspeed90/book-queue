import React, { Component, Fragment } from 'react';
import Styled from 'styled-components';

import GenreButton from '../GenreButton/GenreButton';
import genres from '../../data/genres.json';

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

const GenreGridItem = Styled.div`
  margin: 1rem;
`;

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <Title>Find Books by Category</Title>
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
