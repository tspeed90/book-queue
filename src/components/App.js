import React from 'react';
import { getBooks } from '../utils/fetchBooks';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    const listName = 'young-adult';
    getBooks(listName);
  }

  render() {
    return <h1>Hello World</h1>;
  }
}
