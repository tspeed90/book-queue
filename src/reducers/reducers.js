export const initialState = {
  bookList: []
};

export const updateState = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_BOOK_LIST':
      return Object.assign({}, state, {
        bookList: action.bookList
      });
    default:
      return state;
  }
};
