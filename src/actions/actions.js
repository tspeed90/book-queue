export const setBookList = bookData => {
  return {
    type: 'SET_BOOK_LIST',
    bookList: bookData
  };
};

export const addToShelf = book => {
  return {
    type: 'ADD_BOOK_TO_SHELF',
    book: book
  };
};
