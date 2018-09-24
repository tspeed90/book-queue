export const SET_BOOK_LIST = 'SET_BOOK_LIST';
export const ADD_BOOK_TO_SHELF = 'ADD_BOOK_TO_SHELF';

export const setBookList = bookData => ({
  type: SET_BOOK_LIST,
  bookList: bookData
});

export const addToShelf = book => ({
  type: ADD_BOOK_TO_SHELF,
  book
});
