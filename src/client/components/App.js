import React from 'react';
import { Router } from '@reach/router';

import Home from './Home/Home';
import Browse from '../components/Browse';
import Shelf from '../components/Shelf';

const App = () => (
  <Router>
    <Home path="/" />
    <Browse path="/browse/:genre" />
    <Shelf path="/shelf" />
  </Router>
);

export default App;
