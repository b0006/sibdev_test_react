import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import { StartPage, LoginPage, DashboardPage, SettingPage } from '../pages';

import Navbar from '../Navbar';
import ItemList from "../ItemList";

class App extends Component {
  render() {
    return (
      <div className="uk-container">
        <Navbar />
        <Switch>
          <Route path="/" exact component={StartPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/logout" component={StartPage} />

          <Route path="/dash/:login" component={DashboardPage} />
          <Route path="/settings" component={SettingPage} />

          <Route path="/sw" exact render={() => (
            <ItemList type="sw" />
          )} />
          <Route path="/cats" exact render={() => (
            <ItemList type="cats" />
          )} />
          <Route path="/punks" exact render={() => (
            <ItemList type="punks" />
          )} />
        </Switch>
      </div>
    );
  }
}

export default App;
