import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from '../reducers';

export const getStore = () => {
  const initialState = {};
  const middlewares = [];

  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middlewares),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

  return store;
};
