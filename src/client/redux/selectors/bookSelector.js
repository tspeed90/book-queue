import { createSelector } from 'reselect';

export const getBookState = state => state.book;

export const getBookListSelector = createSelector(
  [getBookState],
  book => book.bookList
);

export const getBooksInQueueSelector = createSelector(
  [getBookState],
  book => book.booksInQueue
);
