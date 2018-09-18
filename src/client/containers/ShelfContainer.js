import { connect } from 'react-redux';

import Shelf from '../components/Shelf/Shelf';

const mapStateToProps = state => ({
  booksInQueue: state.booksInQueue
});

const ShelfContainer = connect(mapStateToProps)(Shelf);

export default ShelfContainer;
