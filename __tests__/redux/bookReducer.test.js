import reducer from '../../src/client/redux/reducers/book';
import {
  ADD_BOOK_TO_SHELF,
  SET_BOOK_LIST
} from '../../src/client/redux/actions/book';

describe('book reducer', () => {
  const bookList = [
    {
      title: 'Girl, Wash Your Face',
      author: 'Rachel Hollis',
      description: 'With wry wit...',
      pageCount: 240,
      thumbnail:
        'http://books.google.com/books/content?id=YZMoDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api'
    }
  ];

  const book = {
    title: 'Girl, Wash Your Face',
    author: 'Rachel Hollis',
    description: 'With wry wit...',
    pageCount: 240,
    thumbnail:
      'http://books.google.com/books/content?id=YZMoDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api'
  };

  const initialState = {
    bookList: [],
    booksInQueue: []
  };

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle SET_BOOK_LIST', () => {
    expect(
      reducer(initialState, {
        type: SET_BOOK_LIST,
        bookList
      })
    ).toEqual({
      bookList,
      booksInQueue: []
    });
  });

  it('should handle ADD_BOOK_TO_SHELF', () => {
    expect(
      reducer(initialState, {
        type: ADD_BOOK_TO_SHELF,
        book
      })
    ).toEqual({
      bookList: [],
      booksInQueue: [book]
    });
  });
});
