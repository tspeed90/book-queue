import React from 'react';
import { getBooks } from '../../utils/fetchBooks';
import CategoryButton from '../CategoryButton/CategoryButton';

export default class Browse extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bookList: [],
      imageList: []
    };
  }

  componentDidMount() {
    getBooks(this.props.category)
      .then(res =>
        this.setState({
          bookList: res.results,
          imageList: res.images
        })
      )
      .then(() => console.log(`${res.results}`))
      .catch(() => console.log('Error setting state in Browse'));
  }

  render() {
    const { bookList, imageList } = this.state;
    return (
      <React.Fragment>
        <h1>Best Sellers in Young Adult</h1>
        {imageList.map(image => {
          return (
            <span>
              <img src={image} alt="" />
            </span>
          );
        })}
        {bookList.map(book => {
          return (
            <div key={book.book_details[0].title}>
              <img src="" alt="" />
              <div>
                <h2>{book.book_details[0].title}</h2>
                <p>
                  Written by {book.book_details[0].author}
                  <br />
                  <br />
                  {book.book_details[0].description}
                </p>
              </div>
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}
