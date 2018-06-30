import React from 'react';
import { getBooks } from '../utils/fetchBooks';

export default class Browse extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bookList: []
    };
  }

  componentDidMount() {
    getBooks(this.props.category)
      .then(res => this.setState({ bookList: res.results }))
      .then(() => console.log(this.state))
      .catch(() => console.log('Error setting state in Browse'));
  }

  render() {
    const { bookList } = this.state;
    return bookList.map(book => {
      return (
        <div>
          <img src="" alt="" />
          <div>
            <p>{book.book_details[0].title} </p>
          </div>
        </div>
      );
    });
  }
}
