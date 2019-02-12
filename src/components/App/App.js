import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { StartPage, LoginPage, DashboardPage } from '../pages';
import Navbar from '../Navbar';

import { SwapiServiceProvider } from "../../components/context";
import { SwapiService } from "../../services";

class App extends Component {
  render() {
    return (
      <div className="uk-container">
        <Navbar />
        <Switch>
          <Route path="/" exact component={StartPage} />
          <Route path="/login" component={LoginPage} />
          <SwapiServiceProvider value={SwapiService}>
            <Route path="/dash/" component={DashboardPage} />
          </SwapiServiceProvider>
        </Switch>
      </div>
    );
  }
}

export default App;
