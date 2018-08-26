import { connect } from 'react-redux';

import Browse from '../components/Browse/Browse';
import { setBookList, addToShelf } from '../actions/actions';

const mapStateToProps = state => ({
  bookList: state.bookList
});

const mapDispatchToProps = dispatch => ({
  setBookList: bookData => dispatch(setBookList(bookData)),
  addToShelf: book => dispatch(addToShelf(book))
});

const BrowseContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Browse);

export default BrowseContainer;
