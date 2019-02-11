import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { StartPage, LoginPage } from '../pages';
import Navbar from '../Navbar';
// import { AuthServiceProvider } from "../context";
// import AuthStoreService from "../../services/auth";

// const authStoreService = new AuthStoreService();

class App extends Component {
  render() {
    return (
      <div className="uk-container">
        <Navbar />
        <Switch>
          <Route path="/" exact render={() => (
              <StartPage />
          )} />
          <Route path="/login" component={LoginPage} />
          {/*<Route path="/login" render={() => (*/}
            {/*<AuthServiceProvider value={authStoreService}>*/}
              {/*<LoginPage />*/}
            {/*</AuthServiceProvider>*/}
          {/*)} />*/}
        </Switch>
      </div>
    );
  }
}

export default App;
