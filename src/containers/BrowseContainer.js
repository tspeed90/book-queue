import Browse from '../components/Browse/Browse';
import { connect } from 'react-redux';

import { setBookList } from '../actions/actions';

const mapStateToProps = state => {
  return {
    bookList: state.bookList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setBookList: bookData => dispatch(setBookList(bookData))
  };
};

const BrowseContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Browse);

export default BrowseContainer;
