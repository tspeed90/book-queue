import React from 'react';
import { getBooks } from '../../utils/fetchBooks';
import CategoryButton from '../CategoryButton/CategoryButton';

export default class Browse extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bookList: []
    };
  }

  componentDidMount() {
    getBooks(this.props.category)
      .then(booksToDisplay =>
        this.setState({
          bookList: booksToDisplay
        })
      )
      .catch(error => console.log(error));
  }

  render() {
    const { bookList } = this.state;
    return (
      <main>
        <h1>Best Sellers in Young Adult</h1>
        {bookList.map(book => {
          return (
            <div key={book.title}>
              <img src={book.thumbnail} alt="" />
              <h2>{book.title}</h2>
              <p>
                Written by {book.author}
                <br />
                <br />
                {book.description}
              </p>
            </div>
          );
        })}
      </main>
    );
  }
}
