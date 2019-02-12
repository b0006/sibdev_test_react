import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { StartPage, LoginPage } from '../pages';
import Navbar from '../Navbar';

class App extends Component {
  render() {
    return (
      <div className="uk-container">
        <Navbar />
        <Switch>
          <Route path="/" exact component={StartPage} />
          <Route path="/login" component={LoginPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
