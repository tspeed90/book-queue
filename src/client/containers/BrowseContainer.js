import { connect } from 'react-redux';

import Browse from '../components/Browse/Browse';
import { setBookList, addToShelf } from '../redux/actions/book';
import { getBookListSelector } from '../redux/selectors/bookSelector';

const mapStateToProps = state => ({
  bookList: getBookListSelector(state)
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
