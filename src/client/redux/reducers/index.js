import bookReducer from './book';
import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';

export default combineReducers({
  book: bookReducer,
  toastr: toastrReducer
});
