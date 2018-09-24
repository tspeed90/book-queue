import { setBookList, addToShelf } from '../../src/client/redux/actions/book';
import {
  ADD_BOOK_TO_SHELF,
  SET_BOOK_LIST
} from '../../src/client/redux/actions/book';

describe('book actions', () => {
  it('should create an action to set book list', () => {
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

    const expectedActions = {
      type: SET_BOOK_LIST,
      bookList
    };

    expect(setBookList(bookList)).toEqual(expectedActions);
  });

  it('should create an action to add book to shelf', () => {
    const book = {
      title: 'Girl, Wash Your Face',
      author: 'Rachel Hollis',
      description: 'With wry wit...',
      pageCount: 240,
      thumbnail:
        'http://books.google.com/books/content?id=YZMoDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api'
    };

    const expectedActions = {
      type: ADD_BOOK_TO_SHELF,
      book
    };

    expect(addToShelf(book)).toEqual(expectedActions);
  });
});
