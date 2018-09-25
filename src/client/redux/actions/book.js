import { toastr } from 'react-redux-toastr';

export const SET_BOOK_LIST_REQUEST = 'SET_BOOK_LIST_REQUEST';
export const SET_BOOK_LIST_SUCCESS = 'SET_BOOK_LIST_SUCCESS';
export const SET_BOOK_LIST_FAIL = 'SET_BOOK_LIST_FAIL';

export const ADD_BOOK_TO_SHELF = 'ADD_BOOK_TO_SHELF';

export const setBookListRequest = () => ({
  type: SET_BOOK_LIST_REQUEST
});

export const setBookListSuccess = bookData => ({
  type: SET_BOOK_LIST_SUCCESS,
  bookList: bookData
});

export const setBookListFail = () => ({
  type: SET_BOOK_LIST_FAIL
});

export const setBookList = genre => dispatch => {
  dispatch(setBookListRequest());
  fetch(`/api/getBooks?genre=${genre}`)
    .then(response => response.json())
    .then(data => dispatch(setBookListSuccess(data)))
    .catch(({ message }) => {
      toastr.warning('Oops...', message);
      dispatch(setBookListFail());
    });
};

export const addToShelf = book => ({
  type: ADD_BOOK_TO_SHELF,
  book
});
