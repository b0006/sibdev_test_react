import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/App';
import ErrorBoundry from './components/ErrorBoundry';
import store from './store';

// import { AuthServiceProvider, SwapiServiceProvider } from "./components/context";
// import { AuthService, SwapiService } from "./services";

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <Router>
        <App />
      </Router>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);
