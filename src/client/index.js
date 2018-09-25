import { render } from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import React, { Fragment } from 'react';
import { getStore } from './redux/store';
import ReduxToastr from 'react-redux-toastr';

const store = getStore();

const app = (
  <Provider store={store}>
    <Fragment>
      <ReduxToastr preventDuplicates />
      <App />
    </Fragment>
  </Provider>
);

render(app, document.getElementById('root'));
