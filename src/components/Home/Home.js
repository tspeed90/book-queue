import React, { Component } from 'react';
import Styled from 'styled-components';

import GenreButton from '../GenreButton/GenreButton';
import genres from '../../data/genres.json';

const GenreList = Styled.main`
  width: 60%;
  margin: 0 auto;
`;

const Title = Styled.h1`
  text-align: center;
  font-weight: lighter;
`;

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <GenreList>
        <Title>Find Books by Category</Title>
        {genres.results.map(genre => {
          return (
            <div key={genre.list_name}>
              <GenreButton
                key={genre.list_name_encoded}
                genre={genre.list_name_encoded}
              >
                {genre.display_name}
              </GenreButton>
              <br />
            </div>
          );
        })}
      </GenreList>
    );
  }
}
