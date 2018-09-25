import React from 'react';
import { connect } from 'react-redux';

import Browse from './Browse';
import { setBookList, addToShelf } from '../../redux/actions/book';
import { getBookListSelector } from '../../redux/selectors/bookSelector';

const BrowseContainer = props => <Browse {...props} />;

const mapStateToProps = state => ({
  bookList: getBookListSelector(state)
});

const mapDispatchToProps = (dispatch, props) => ({
  setBookList: () => dispatch(setBookList(props.genre)),
  addToShelf: book => dispatch(addToShelf(book))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BrowseContainer);
