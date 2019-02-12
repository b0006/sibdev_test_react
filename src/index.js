import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/App';
import ErrorBoundry from './components/ErrorBoundry';
import store from './store';

import { AuthServiceProvider } from "./components/context";
import * as authStoreService from "./services/auth";
// const authStoreService = new AuthService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <Router>
        <AuthServiceProvider value={authStoreService}>
          <App />
        </AuthServiceProvider>
      </Router>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);
