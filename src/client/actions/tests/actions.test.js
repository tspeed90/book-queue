import * as actions from '../actions';

export const setBookList = bookData => {
  return {
    type: 'SET_BOOK_LIST',
    bookList: bookData
  };
};
describe('actions', () => {
  it('should create an action to set bookList from response object', () => {
    const bookData = {};
    const expectedAction = {
      type: 'SET_BOOK_LIST',
      bookList: bookData
    };
    expect(actions.setBookList(bookData)).toEqual(expectedAction);
  });
  it('should create an action to add book to shelf', () => {
    const book = 'Turtles All The Way Down';
    const expectedAction = {
      type: 'ADD_BOOK_TO_SHELF',
      book
    };
    expect(actions.addToShelf(book)).toEqual(expectedAction);
  });
});
