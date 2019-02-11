import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/App';
import ErrorBoundry from './components/ErrorBoundry';
import SwapiStoreService from './services/swapi';
import { SwapiServiceProvider } from './components/context';

import store from './store';

const swapiStoreService = new SwapiStoreService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <SwapiServiceProvider value={swapiStoreService}>
        <Router>
          <App />
        </Router>
      </SwapiServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);
