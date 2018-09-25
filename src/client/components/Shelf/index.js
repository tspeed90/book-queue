import React from 'react';
import { connect } from 'react-redux';

import Shelf from './Shelf';
import { getBooksInQueueSelector } from '../../redux/selectors/bookSelector';

const ShelfContainer = props => <Shelf {...props} />;

const mapStateToProps = state => ({
  booksInQueue: getBooksInQueueSelector(state)
});

export default connect(mapStateToProps)(ShelfContainer);
