import {
  ADD_BOOK_TO_SHELF,
  SET_BOOK_LIST_REQUEST,
  SET_BOOK_LIST_SUCCESS,
  SET_BOOK_LIST_FAIL
} from '../actions/book';

export const initialState = {
  bookList: [],
  booksInQueue: [],
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOK_LIST_SUCCESS:
      return {
        ...state,
        bookList: action.bookList,
        loading: false
      };
    case SET_BOOK_LIST_REQUEST:
      return {
        ...state,
        loading: true
      };
    case SET_BOOK_LIST_FAIL:
      return {
        ...state,
        loading: false
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
