import React, { Component } from 'react';

import GenreButton from '../GenreButton/GenreButton';
import genres from '../../data/genres.json';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(genres);
    return (
      <main>
        {genres.results.map(genre => {
          return (
            <React.Fragment>
              <GenreButton
                key={genre.list_name_encoded}
                genre={genre.list_name_encoded}
              >
                {genre.display_name}
              </GenreButton>
              <br />
            </React.Fragment>
          );
        })}
      </main>
    );
  }
}
