import { connect } from 'react-redux';

import Shelf from '../components/Shelf/Shelf';
import { getBooksInQueueSelector } from '../redux/selectors/bookSelector';

const mapStateToProps = state => ({
  booksInQueue: getBooksInQueueSelector(state)
});

const ShelfContainer = connect(mapStateToProps)(Shelf);

export default ShelfContainer;
