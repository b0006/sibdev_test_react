import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import { StartPage, LoginPage, DashboardPage, SettingPage } from '../pages';
import serviceStatic from '../../serviceStatic';

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

          <Route path="/dash/:login/" component={DashboardPage} />
          <Route path="/settings" component={SettingPage} />

          {
            serviceStatic.map(service => (
              <Route key={`link_${service.value}`} path={"/" + service.value} exact render={() => (<ItemList type={service.value} />)} />
            ))
          }
        </Switch>
      </div>
    );
  }
}

export default App;
