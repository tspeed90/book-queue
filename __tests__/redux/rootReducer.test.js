import { createStore } from 'redux';
import rootReducer from '../../src/client/redux/reducers';
import bookReducer from '../../src/client/redux/reducers/book';

describe('root reducer', () => {
  const store = createStore(rootReducer);

  it('initial state of the root reducer matches to book reducer', () => {
    expect(store.getState().book).toEqual(bookReducer(undefined, {}));
  });
});
