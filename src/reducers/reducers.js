export const initialState = {
  bookList: [],
  booksInQueue: []
};

export const updateState = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_BOOK_LIST':
      return Object.assign({}, state, {
        bookList: action.bookList
      });
    case 'ADD_BOOK_TO_SHELF':
      return Object.assign({}, state, {
        booksInQueue: [...state.booksInQueue, action.book]
      });
    default:
      return state;
  }
};
