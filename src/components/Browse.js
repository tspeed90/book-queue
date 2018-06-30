import React from 'react';
import { getBooks } from '../utils/fetchBooks';

export default class Browse extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bookList: null
    };
  }

  componentDidMount() {
    getBooks(this.props.category)
      .then(res => this.setState({ bookList: res }))
      .then(() => console.log(this.state));
  }

  render() {
    return (
      <div>
        <img src="" alt="" />
        <div>
          <p> </p>
        </div>
      </div>
    );
  }
}
