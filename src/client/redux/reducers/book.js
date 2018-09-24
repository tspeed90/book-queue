import { ADD_BOOK_TO_SHELF, SET_BOOK_LIST } from '../actions/book';

export const initialState = {
  bookList: [],
  booksInQueue: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOK_LIST:
      return {
        ...state,
        bookList: action.bookList
      };
    case ADD_BOOK_TO_SHELF:
      return {
        ...state,
        booksInQueue: [...state.booksInQueue, action.book]
      };
    default:
      return state;
  }
};

export default reducer;
